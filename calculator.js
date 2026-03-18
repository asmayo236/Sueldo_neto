// ============================================================
// Calculadora de Sueldo Neto - España
// Tramos IRPF estatales y autonómicos actualizados a 2025
// ============================================================

// --- Tramos estatales del IRPF ---
const TRAMOS_ESTATALES = [
    { hasta: 12450, tipo: 9.5 },
    { hasta: 20200, tipo: 12.0 },
    { hasta: 35200, tipo: 15.0 },
    { hasta: 60000, tipo: 18.5 },
    { hasta: 300000, tipo: 22.5 },
    { hasta: Infinity, tipo: 24.5 },
];

// --- Tramos autonómicos del IRPF por comunidad ---
const TRAMOS_AUTONOMICOS = {
    andalucia: [
        { hasta: 13000, tipo: 9.5 },
        { hasta: 21000, tipo: 12.0 },
        { hasta: 35200, tipo: 15.0 },
        { hasta: 60000, tipo: 18.5 },
        { hasta: 120000, tipo: 22.5 },
        { hasta: Infinity, tipo: 24.5 },
    ],
    aragon: [
        { hasta: 12450, tipo: 10.0 },
        { hasta: 20200, tipo: 12.5 },
        { hasta: 34000, tipo: 15.5 },
        { hasta: 50000, tipo: 19.0 },
        { hasta: 70000, tipo: 21.0 },
        { hasta: 90000, tipo: 22.0 },
        { hasta: 150000, tipo: 23.5 },
        { hasta: Infinity, tipo: 25.0 },
    ],
    asturias: [
        { hasta: 12450, tipo: 10.0 },
        { hasta: 17707, tipo: 12.0 },
        { hasta: 33007, tipo: 14.0 },
        { hasta: 53407, tipo: 18.5 },
        { hasta: 70000, tipo: 21.5 },
        { hasta: 90000, tipo: 22.5 },
        { hasta: 175000, tipo: 25.0 },
        { hasta: Infinity, tipo: 25.5 },
    ],
    baleares: [
        { hasta: 10000, tipo: 9.5 },
        { hasta: 18000, tipo: 11.75 },
        { hasta: 30000, tipo: 14.75 },
        { hasta: 48000, tipo: 17.75 },
        { hasta: 70000, tipo: 19.25 },
        { hasta: 90000, tipo: 22.0 },
        { hasta: 175000, tipo: 23.5 },
        { hasta: Infinity, tipo: 25.0 },
    ],
    canarias: [
        { hasta: 12450, tipo: 9.0 },
        { hasta: 17707, tipo: 11.5 },
        { hasta: 33007, tipo: 14.0 },
        { hasta: 53407, tipo: 18.0 },
        { hasta: 90000, tipo: 23.5 },
        { hasta: Infinity, tipo: 24.0 },
    ],
    cantabria: [
        { hasta: 12450, tipo: 9.5 },
        { hasta: 20200, tipo: 12.0 },
        { hasta: 35200, tipo: 15.0 },
        { hasta: 46800, tipo: 18.0 },
        { hasta: 60000, tipo: 19.5 },
        { hasta: 90000, tipo: 24.0 },
        { hasta: Infinity, tipo: 25.5 },
    ],
    castilla_leon: [
        { hasta: 12450, tipo: 9.0 },
        { hasta: 20200, tipo: 12.0 },
        { hasta: 35200, tipo: 14.0 },
        { hasta: 53407, tipo: 18.5 },
        { hasta: Infinity, tipo: 21.5 },
    ],
    castilla_mancha: [
        { hasta: 12450, tipo: 9.5 },
        { hasta: 20200, tipo: 12.0 },
        { hasta: 35200, tipo: 15.0 },
        { hasta: 60000, tipo: 18.5 },
        { hasta: Infinity, tipo: 22.5 },
    ],
    cataluna: [
        { hasta: 12450, tipo: 10.5 },
        { hasta: 17707, tipo: 12.0 },
        { hasta: 33007, tipo: 14.0 },
        { hasta: 53407, tipo: 18.5 },
        { hasta: 90000, tipo: 21.5 },
        { hasta: 120000, tipo: 23.5 },
        { hasta: 175000, tipo: 24.5 },
        { hasta: Infinity, tipo: 25.5 },
    ],
    extremadura: [
        { hasta: 12450, tipo: 9.5 },
        { hasta: 20200, tipo: 12.5 },
        { hasta: 35200, tipo: 15.5 },
        { hasta: 60000, tipo: 19.5 },
        { hasta: 80000, tipo: 22.5 },
        { hasta: 120000, tipo: 23.5 },
        { hasta: Infinity, tipo: 25.0 },
    ],
    galicia: [
        { hasta: 12450, tipo: 9.5 },
        { hasta: 20200, tipo: 11.75 },
        { hasta: 35200, tipo: 14.75 },
        { hasta: 60000, tipo: 18.5 },
        { hasta: Infinity, tipo: 22.5 },
    ],
    madrid: [
        { hasta: 12450, tipo: 8.5 },
        { hasta: 17707, tipo: 10.7 },
        { hasta: 33007, tipo: 12.8 },
        { hasta: 53407, tipo: 17.4 },
        { hasta: Infinity, tipo: 20.5 },
    ],
    murcia: [
        { hasta: 12450, tipo: 9.5 },
        { hasta: 20200, tipo: 12.0 },
        { hasta: 34000, tipo: 15.0 },
        { hasta: 60000, tipo: 18.5 },
        { hasta: Infinity, tipo: 23.5 },
    ],
    navarra: [
        { hasta: 4017, tipo: 13.0 },
        { hasta: 7852, tipo: 22.0 },
        { hasta: 13397, tipo: 25.0 },
        { hasta: 22649, tipo: 28.0 },
        { hasta: 32824, tipo: 35.5 },
        { hasta: 43945, tipo: 39.0 },
        { hasta: 63822, tipo: 42.0 },
        { hasta: 86937, tipo: 44.0 },
        { hasta: 152706, tipo: 47.0 },
        { hasta: 253136, tipo: 49.0 },
        { hasta: Infinity, tipo: 52.0 },
    ],
    pais_vasco: [
        { hasta: 17360, tipo: 23.0 },
        { hasta: 32060, tipo: 28.0 },
        { hasta: 42060, tipo: 34.0 },
        { hasta: 62060, tipo: 36.0 },
        { hasta: 82060, tipo: 40.0 },
        { hasta: 103060, tipo: 45.0 },
        { hasta: 178360, tipo: 47.0 },
        { hasta: Infinity, tipo: 49.0 },
    ],
    rioja: [
        { hasta: 12450, tipo: 9.0 },
        { hasta: 20200, tipo: 11.6 },
        { hasta: 35200, tipo: 14.6 },
        { hasta: 50000, tipo: 18.8 },
        { hasta: 65000, tipo: 19.5 },
        { hasta: 80000, tipo: 25.0 },
        { hasta: 120000, tipo: 27.0 },
        { hasta: Infinity, tipo: 28.5 },
    ],
    valencia: [
        { hasta: 12000, tipo: 10.0 },
        { hasta: 22000, tipo: 12.0 },
        { hasta: 35200, tipo: 15.0 },
        { hasta: 48000, tipo: 17.5 },
        { hasta: 65000, tipo: 20.0 },
        { hasta: 80000, tipo: 22.0 },
        { hasta: 140000, tipo: 25.0 },
        { hasta: Infinity, tipo: 25.5 },
    ],
};

// --- Cotizaciones Seguridad Social (trabajador) ---
const SS_CONTINGENCIAS_COMUNES = 4.70; // %
const SS_FORMACION = 0.10; // %
const SS_MEI = 0.13; // % Mecanismo de Equidad Intergeneracional
const SS_DESEMPLEO_GENERAL = 1.55; // %
const SS_DESEMPLEO_TEMPORAL = 1.60; // %

// Bases de cotización 2025
const BASE_MINIMA_MENSUAL = 1184.40;
const BASE_MAXIMA_MENSUAL = 4720.50;

// --- Mínimo personal y familiar ---
const MINIMO_PERSONAL = 5550;
const MINIMO_PERSONAL_65 = 6700; // mayor 65
const MINIMO_PERSONAL_75 = 8100; // mayor 75

const MINIMO_HIJO = [0, 2400, 2700, 4000, 4500]; // 1o, 2o, 3o, 4o+
const MINIMO_HIJO_MENOR_3 = 2800; // adicional por hijo menor de 3

const MINIMO_DISCAPACIDAD_33 = 3000;
const MINIMO_DISCAPACIDAD_65 = 9000;

// --- Reducciones por rendimiento del trabajo ---
function reduccionRendimientoTrabajo(rendimientoNeto) {
    if (rendimientoNeto <= 14852) {
        return 6498;
    } else if (rendimientoNeto <= 17673.52) {
        return 6498 - 1.14 * (rendimientoNeto - 14852);
    }
    return 0;
}

// Gastos deducibles fijos del trabajo
const GASTOS_DEDUCIBLES = 2000;

// --- Funciones de cálculo ---

function calcularSS(salarioBrutoAnual, tipoContrato) {
    const baseMensual = Math.max(
        BASE_MINIMA_MENSUAL,
        Math.min(salarioBrutoAnual / 12, BASE_MAXIMA_MENSUAL)
    );
    const baseAnual = baseMensual * 12;

    const pctDesempleo =
        tipoContrato === 'temporal' ? SS_DESEMPLEO_TEMPORAL : SS_DESEMPLEO_GENERAL;

    const cc = (baseAnual * SS_CONTINGENCIAS_COMUNES) / 100;
    const desempleo = (baseAnual * pctDesempleo) / 100;
    const fp = (baseAnual * SS_FORMACION) / 100;
    const mei = (baseAnual * SS_MEI) / 100;

    return {
        cc,
        desempleo,
        fp,
        mei,
        total: cc + desempleo + fp + mei,
        pctDesempleo,
    };
}

function calcularCuotaTramos(baseLiquidable, tramos) {
    let cuota = 0;
    let baseRestante = baseLiquidable;
    let limiteAnterior = 0;

    for (const tramo of tramos) {
        if (baseRestante <= 0) break;
        const amplitud = tramo.hasta - limiteAnterior;
        const baseTramo = Math.min(baseRestante, amplitud);
        cuota += (baseTramo * tramo.tipo) / 100;
        baseRestante -= baseTramo;
        limiteAnterior = tramo.hasta;
    }

    return cuota;
}

function calcularMinimoPersonalFamiliar(edad, numHijos, discapacidad) {
    let minimo;
    if (edad === 'mayor75') {
        minimo = MINIMO_PERSONAL_75;
    } else if (edad === 'mayor65') {
        minimo = MINIMO_PERSONAL_65;
    } else {
        minimo = MINIMO_PERSONAL;
    }

    for (let i = 0; i < numHijos; i++) {
        const idx = Math.min(i, MINIMO_HIJO.length - 1);
        minimo += MINIMO_HIJO[idx];
        // Asumimos al menos un hijo menor de 3 si tiene hijos
        if (i === 0) {
            minimo += MINIMO_HIJO_MENOR_3;
        }
    }

    if (discapacidad === '33') {
        minimo += MINIMO_DISCAPACIDAD_33;
    } else if (discapacidad === '65') {
        minimo += MINIMO_DISCAPACIDAD_65;
    }

    return minimo;
}

function esForalCompleto(comunidad) {
    return comunidad === 'navarra' || comunidad === 'pais_vasco';
}

function calcularIRPF(salarioBrutoAnual, ss, comunidad, edad, numHijos, discapacidad, situacion) {
    const foral = esForalCompleto(comunidad);

    // Rendimiento neto previo
    const rendimientoNeto = salarioBrutoAnual - ss.total - GASTOS_DEDUCIBLES;
    if (rendimientoNeto <= 0) {
        return { cuotaEstatal: 0, cuotaAutonomica: 0, total: 0, baseLiquidable: 0 };
    }

    const reduccion = reduccionRendimientoTrabajo(rendimientoNeto);
    const baseLiquidable = Math.max(rendimientoNeto - reduccion, 0);

    const minimoPersonalFamiliar = calcularMinimoPersonalFamiliar(edad, numHijos, discapacidad);

    if (foral) {
        // Navarra y País Vasco: IRPF propio (sin separación estatal/autonómica)
        const cuotaTotal = calcularCuotaTramos(baseLiquidable, TRAMOS_AUTONOMICOS[comunidad]);
        const cuotaMinimo = calcularCuotaTramos(minimoPersonalFamiliar, TRAMOS_AUTONOMICOS[comunidad]);
        const cuotaFinal = Math.max(cuotaTotal - cuotaMinimo, 0);
        return {
            cuotaEstatal: 0,
            cuotaAutonomica: cuotaFinal,
            total: cuotaFinal,
            baseLiquidable,
        };
    }

    // Régimen común: cuota estatal + cuota autonómica
    const cuotaEstatalBruta = calcularCuotaTramos(baseLiquidable, TRAMOS_ESTATALES);
    const cuotaMinimoEstatal = calcularCuotaTramos(minimoPersonalFamiliar, TRAMOS_ESTATALES);
    const cuotaEstatal = Math.max(cuotaEstatalBruta - cuotaMinimoEstatal, 0);

    const tramosAut = TRAMOS_AUTONOMICOS[comunidad];
    const cuotaAutBruta = calcularCuotaTramos(baseLiquidable, tramosAut);
    const cuotaMinimoAut = calcularCuotaTramos(minimoPersonalFamiliar, tramosAut);
    const cuotaAutonomica = Math.max(cuotaAutBruta - cuotaMinimoAut, 0);

    return {
        cuotaEstatal,
        cuotaAutonomica,
        total: cuotaEstatal + cuotaAutonomica,
        baseLiquidable,
    };
}

// --- Formateo ---

function formatEUR(valor) {
    return valor.toLocaleString('es-ES', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }) + ' \u20AC';
}

// --- Evento del formulario ---

document.getElementById('salary-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const salarioBruto = parseFloat(document.getElementById('salario-bruto').value);
    if (!salarioBruto || salarioBruto <= 0) return;

    const numPagas = parseInt(document.getElementById('num-pagas').value);
    const comunidad = document.getElementById('comunidad').value;
    const situacion = document.getElementById('situacion').value;
    const numHijos = parseInt(document.getElementById('hijos').value);
    const edad = document.getElementById('edad').value;
    const discapacidad = document.getElementById('discapacidad').value;
    const contrato = document.getElementById('contrato').value;

    // 1. Seguridad Social
    const ss = calcularSS(salarioBruto, contrato);

    // 2. IRPF
    const irpf = calcularIRPF(salarioBruto, ss, comunidad, edad, numHijos, discapacidad, situacion);

    // 3. Neto
    const netoAnual = salarioBruto - ss.total - irpf.total;
    const netoMensual = netoAnual / numPagas;

    // 4. Porcentajes
    const pctNeto = ((netoAnual / salarioBruto) * 100).toFixed(1);
    const pctIRPF = ((irpf.total / salarioBruto) * 100).toFixed(1);
    const pctSS = ((ss.total / salarioBruto) * 100).toFixed(1);
    const tipoEfectivo = ((irpf.total / salarioBruto) * 100).toFixed(2);

    // --- Mostrar resultados ---
    document.getElementById('neto-mensual').textContent = formatEUR(netoMensual);
    document.getElementById('neto-anual').textContent = formatEUR(netoAnual);

    document.getElementById('res-bruto').textContent = formatEUR(salarioBruto);
    document.getElementById('res-cc').textContent = '-' + formatEUR(ss.cc);
    document.getElementById('res-desempleo-pct').textContent = ss.pctDesempleo.toFixed(2);
    document.getElementById('res-desempleo').textContent = '-' + formatEUR(ss.desempleo);
    document.getElementById('res-fp').textContent = '-' + formatEUR(ss.fp);
    document.getElementById('res-mei').textContent = '-' + formatEUR(ss.mei);
    document.getElementById('res-ss-total').textContent = '-' + formatEUR(ss.total);

    document.getElementById('res-base-liquidable').textContent = formatEUR(irpf.baseLiquidable);
    document.getElementById('res-cuota-estatal').textContent = '-' + formatEUR(irpf.cuotaEstatal);
    document.getElementById('res-cuota-autonomica').textContent = '-' + formatEUR(irpf.cuotaAutonomica);
    document.getElementById('res-irpf-total').textContent = '-' + formatEUR(irpf.total);
    document.getElementById('res-tipo-efectivo').textContent = tipoEfectivo + '%';
    document.getElementById('res-neto').textContent = formatEUR(netoAnual);

    // Barra de distribución
    document.getElementById('barra-neto').style.width = pctNeto + '%';
    document.getElementById('barra-irpf').style.width = pctIRPF + '%';
    document.getElementById('barra-ss').style.width = pctSS + '%';

    document.getElementById('pct-neto').textContent = pctNeto + '%';
    document.getElementById('pct-irpf').textContent = pctIRPF + '%';
    document.getElementById('pct-ss').textContent = pctSS + '%';

    document.getElementById('resultados').classList.remove('hidden');
    document.getElementById('resultados').scrollIntoView({ behavior: 'smooth' });
});
