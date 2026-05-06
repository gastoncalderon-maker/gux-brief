<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Brief Comercial · GUX</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --purple: #534AB7;
      --purple-light: #EEEDFE;
      --purple-mid: #AFA9EC;
      --purple-dark: #3C3489;
      --teal: #1D9E75;
      --teal-light: #E1F5EE;
      --amber: #EF9F27;
      --amber-light: #FAEEDA;
      --red: #E24B4A;
      --red-light: #FCEBEB;
      --gray-50: #F8F8F6;
      --gray-100: #F1EFE8;
      --gray-200: #D3D1C7;
      --gray-400: #888780;
      --gray-700: #444441;
      --gray-900: #1C1C1A;
      --text: #1C1C1A;
      --text-secondary: #5F5E5A;
      --text-tertiary: #888780;
      --border: rgba(0,0,0,0.1);
      --border-strong: rgba(0,0,0,0.18);
      --surface: #ffffff;
      --bg: #F8F8F6;
      --radius: 10px;
      --radius-lg: 14px;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: var(--bg);
      color: var(--text);
      min-height: 100vh;
      padding: 0;
    }

    /* Layout */
    .shell {
      display: grid;
      grid-template-columns: 280px 1fr;
      min-height: 100vh;
    }

    /* Sidebar */
    .sidebar {
      background: var(--purple-dark);
      padding: 2rem 1.5rem;
      position: sticky;
      top: 0;
      height: 100vh;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
    }

    .logo {
      font-size: 20px;
      font-weight: 600;
      color: white;
      letter-spacing: -0.02em;
      margin-bottom: 4px;
    }

    .logo-sub {
      font-size: 12px;
      color: rgba(255,255,255,0.5);
      margin-bottom: 2.5rem;
    }

    .steps {
      display: flex;
      flex-direction: column;
      gap: 4px;
      flex: 1;
    }

    .step {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 8px 10px;
      border-radius: 8px;
      cursor: pointer;
      transition: background 0.15s;
    }

    .step-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: rgba(255,255,255,0.2);
      flex-shrink: 0;
      transition: all 0.2s;
    }

    .step.active .step-dot { background: white; width: 10px; height: 10px; }
    .step.done .step-dot { background: var(--teal); }

    .step-label {
      font-size: 13px;
      color: rgba(255,255,255,0.45);
      transition: color 0.15s;
      line-height: 1.3;
    }

    .step.active .step-label { color: white; font-weight: 500; }
    .step.done .step-label { color: rgba(255,255,255,0.65); }

    .step-divider {
      width: 1px;
      height: 12px;
      background: rgba(255,255,255,0.1);
      margin-left: 13px;
    }

    .sidebar-footer {
      margin-top: auto;
      padding-top: 1.5rem;
      font-size: 11px;
      color: rgba(255,255,255,0.3);
      line-height: 1.5;
    }

    /* Main content */
    .main {
      padding: 3rem 2.5rem;
      max-width: 680px;
    }

    /* Progress bar */
    .progress-wrap {
      height: 3px;
      background: var(--gray-200);
      border-radius: 99px;
      margin-bottom: 2.5rem;
      overflow: hidden;
    }

    .progress-bar {
      height: 100%;
      background: var(--purple);
      border-radius: 99px;
      transition: width 0.4s ease;
    }

    /* Sections */
    .section { display: none; }
    .section.active { display: block; }

    .section-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      padding: 4px 10px;
      border-radius: 99px;
      margin-bottom: 10px;
    }

    .badge-trunk { background: #E6F1FB; color: #0C447C; }
    .badge-integ { background: var(--amber-light); color: #633806; }
    .badge-plat  { background: var(--purple-light); color: var(--purple-dark); }
    .badge-web   { background: var(--teal-light); color: #085041; }
    .badge-licit { background: #FAECE7; color: #712B13; }
    .badge-close { background: var(--gray-100); color: var(--gray-700); }

    .section-title {
      font-size: 26px;
      font-weight: 600;
      letter-spacing: -0.02em;
      color: var(--text);
      margin-bottom: 6px;
      line-height: 1.2;
    }

    .section-sub {
      font-size: 14px;
      color: var(--text-secondary);
      line-height: 1.6;
      margin-bottom: 2rem;
    }

    /* Type selection */
    .type-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      margin-bottom: 1rem;
    }

    .type-card {
      border: 1.5px solid var(--border);
      border-radius: var(--radius-lg);
      padding: 16px;
      cursor: pointer;
      transition: all 0.15s;
      background: var(--surface);
      position: relative;
    }

    .type-card:hover { border-color: var(--purple-mid); background: var(--purple-light); }

    .type-card.selected {
      border-color: var(--purple);
      background: var(--purple-light);
      box-shadow: 0 0 0 3px rgba(83,74,183,0.12);
    }

    .type-card-icon {
      font-size: 20px;
      margin-bottom: 8px;
      display: block;
    }

    .type-card-title {
      font-size: 14px;
      font-weight: 600;
      color: var(--text);
      margin-bottom: 3px;
    }

    .type-card.selected .type-card-title { color: var(--purple-dark); }

    .type-card-desc {
      font-size: 12px;
      color: var(--text-tertiary);
      line-height: 1.4;
    }

    .type-card.selected .type-card-desc { color: var(--purple); }

    /* Question blocks */
    .qblock {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius-lg);
      padding: 18px 20px;
      margin-bottom: 10px;
      transition: border-color 0.15s;
    }

    .qblock:focus-within { border-color: var(--purple-mid); }

    .qblock.required { border-left: 2.5px solid var(--purple); }

    .qtag {
      display: inline-block;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      padding: 2px 8px;
      border-radius: 99px;
      margin-bottom: 7px;
    }

    .qtag-req { background: var(--purple-light); color: var(--purple-dark); }
    .qtag-alert { background: var(--amber-light); color: #633806; }

    .qlabel {
      font-size: 15px;
      font-weight: 500;
      color: var(--text);
      margin-bottom: 4px;
      line-height: 1.4;
    }

    .qhint {
      font-size: 12px;
      color: var(--text-secondary);
      line-height: 1.5;
      margin-bottom: 12px;
    }

    textarea, input[type="text"] {
      width: 100%;
      font-family: inherit;
      font-size: 14px;
      color: var(--text);
      background: var(--gray-50);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 10px 12px;
      resize: vertical;
      transition: border-color 0.15s, box-shadow 0.15s;
      outline: none;
    }

    textarea { min-height: 80px; }

    textarea:focus, input[type="text"]:focus {
      border-color: var(--purple);
      box-shadow: 0 0 0 3px rgba(83,74,183,0.1);
      background: white;
    }

    /* Checkboxes */
    .check-group { display: flex; flex-direction: column; gap: 8px; }

    .check-item {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      padding: 8px 10px;
      border-radius: 8px;
      cursor: pointer;
      transition: background 0.1s;
      border: 1px solid transparent;
    }

    .check-item:hover { background: var(--gray-50); }
    .check-item:has(input:checked) { background: var(--purple-light); border-color: var(--purple-mid); }

    .check-item input[type="checkbox"] {
      width: 16px;
      height: 16px;
      margin-top: 1px;
      accent-color: var(--purple);
      flex-shrink: 0;
      cursor: pointer;
    }

    .check-item span {
      font-size: 13px;
      color: var(--text);
      line-height: 1.4;
      padding-top: 1px;
    }

    /* Pills / radio */
    .pills { display: flex; flex-wrap: wrap; gap: 7px; }

    .pill {
      padding: 6px 14px;
      border-radius: 99px;
      font-size: 13px;
      border: 1.5px solid var(--border-strong);
      cursor: pointer;
      color: var(--text-secondary);
      transition: all 0.15s;
      background: white;
      user-select: none;
    }

    .pill:hover { border-color: var(--purple-mid); color: var(--text); }

    .pill.selected {
      background: var(--purple-light);
      border-color: var(--purple);
      color: var(--purple-dark);
      font-weight: 500;
    }

    /* Alert box */
    .alert-box {
      background: var(--amber-light);
      border: 1px solid #FAC775;
      border-radius: 8px;
      padding: 10px 13px;
      font-size: 12px;
      color: #633806;
      line-height: 1.5;
      margin-top: 10px;
    }

    .alert-box strong { font-weight: 600; }

    /* Navigation */
    .nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 2rem;
      padding-top: 1.5rem;
      border-top: 1px solid var(--border);
    }

    .btn {
      padding: 10px 22px;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      border: 1.5px solid var(--border-strong);
      background: white;
      color: var(--text);
      transition: all 0.15s;
      font-family: inherit;
    }

    .btn:hover { background: var(--gray-50); }
    .btn:disabled { opacity: 0.35; cursor: not-allowed; }

    .btn-primary {
      background: var(--purple);
      color: white;
      border-color: var(--purple);
    }

    .btn-primary:hover { background: var(--purple-dark); border-color: var(--purple-dark); }
    .btn-primary:disabled { background: var(--purple); opacity: 0.4; }

    .btn-submit {
      background: var(--teal);
      color: white;
      border-color: var(--teal);
      padding: 12px 28px;
      font-size: 15px;
    }

    .btn-submit:hover { background: #0F6E56; }

    .nav-info {
      font-size: 12px;
      color: var(--text-tertiary);
      text-align: center;
    }

    /* Success state */
    .success-screen {
      display: none;
      text-align: center;
      padding: 4rem 2rem;
    }

    .success-screen.show { display: block; }

    .success-icon {
      width: 64px;
      height: 64px;
      background: var(--teal-light);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1.5rem;
      font-size: 28px;
    }

    .success-title {
      font-size: 24px;
      font-weight: 600;
      color: var(--text);
      margin-bottom: 8px;
    }

    .success-sub {
      font-size: 15px;
      color: var(--text-secondary);
      line-height: 1.6;
      max-width: 400px;
      margin: 0 auto 2rem;
    }

    /* Loading */
    .btn-submit.loading {
      opacity: 0.7;
      cursor: not-allowed;
      pointer-events: none;
    }

    /* Error */
    .error-msg {
      display: none;
      background: var(--red-light);
      border: 1px solid var(--red);
      border-radius: 8px;
      padding: 10px 14px;
      font-size: 13px;
      color: #791F1F;
      margin-top: 12px;
    }

    .error-msg.show { display: block; }

    /* Responsive */
    @media (max-width: 720px) {
      .shell { grid-template-columns: 1fr; }
      .sidebar { display: none; }
      .main { padding: 2rem 1.25rem; }
      .type-grid { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>

<div class="shell">

  <!-- Sidebar -->
  <aside class="sidebar">
    <div class="logo">GUX</div>
    <div class="logo-sub">Brief Comercial</div>

    <div class="steps" id="steps-nav">
      <div class="step active" data-step="0">
        <div class="step-dot"></div>
        <div class="step-label">Tipo de proyecto</div>
      </div>
      <div class="step-divider"></div>
      <div class="step" data-step="1">
        <div class="step-dot"></div>
        <div class="step-label">Contexto del cliente</div>
      </div>
      <div class="step-divider"></div>
      <div class="step" data-step="2">
        <div class="step-dot"></div>
        <div class="step-label" id="branch-label">Detalle técnico</div>
      </div>
      <div class="step-divider"></div>
      <div class="step" data-step="3">
        <div class="step-dot"></div>
        <div class="step-label">Contexto de la reunión</div>
      </div>
    </div>

    <div class="sidebar-footer">
      Completar después de la reunión con el cliente.<br>Tiempo estimado: 20–30 min.
    </div>
  </aside>

  <!-- Main -->
  <main class="main">
    <div class="progress-wrap">
      <div class="progress-bar" id="progress" style="width: 0%"></div>
    </div>

    <!-- Pantalla de éxito -->
    <div class="success-screen" id="success">
      <div class="success-icon">✓</div>
      <h2 class="success-title">Brief enviado</h2>
      <p class="success-sub">El equipo técnico lo revisará antes de estimar. No dar estimaciones verbales al cliente hasta recibir confirmación.</p>
      <button class="btn" onclick="resetForm()">Enviar otro brief</button>
    </div>

    <!-- SECCIÓN 0: Tipo -->
    <div class="section active" id="s0">
      <span class="section-badge badge-trunk">Paso 1 de 4</span>
      <h1 class="section-title">¿Qué tipo de proyecto es?</h1>
      <p class="section-sub">Si el cliente mencionó más de un tipo, selecciona el que tiene mayor peso en la conversación.</p>

      <div class="type-grid">
        <div class="type-card" onclick="selectType('integ', this)" id="type-integ">
          <span class="type-card-icon">⚙️</span>
          <div class="type-card-title">Integración</div>
          <div class="type-card-desc">Conectar sistemas existentes, APIs, ERP, CRM, sincronización de datos</div>
        </div>
        <div class="type-card" onclick="selectType('plat', this)" id="type-plat">
          <span class="type-card-icon">📱</span>
          <div class="type-card-title">Plataforma / App</div>
          <div class="type-card-desc">Producto digital nuevo o evolución de uno existente</div>
        </div>
        <div class="type-card" onclick="selectType('web', this)" id="type-web">
          <span class="type-card-icon">🌐</span>
          <div class="type-card-title">Sitio web</div>
          <div class="type-card-desc">Sitio informativo, corporativo o con componentes transaccionales</div>
        </div>
        <div class="type-card" onclick="selectType('licit', this)" id="type-licit">
          <span class="type-card-icon">📋</span>
          <div class="type-card-title">Licitación</div>
          <div class="type-card-desc">Proceso formal con bases técnicas, plazos legales y contraparte pública o privada</div>
        </div>
      </div>

      <div class="nav">
        <span></span>
        <div style="text-align:right">
          <button class="btn btn-primary" id="btn-next-0" onclick="goNext()" disabled>Siguiente →</button>
        </div>
      </div>
    </div>

    <!-- SECCIÓN 1: Tronco -->
    <div class="section" id="s1">
      <span class="section-badge badge-trunk">Paso 2 de 4</span>
      <h1 class="section-title">Contexto del cliente</h1>
      <p class="section-sub">Estas preguntas aplican a cualquier tipo de proyecto. Si el cliente no pudo responder algo, anótalo igual.</p>

      <div class="qblock required">
        <span class="qtag qtag-req">Obligatorio</span>
        <p class="qlabel">¿Qué problema de negocio quiere resolver?</p>
        <p class="qhint">Que lo explique en sus palabras. Evita que diga "necesito una app". ¿Por qué la necesita?</p>
        <textarea id="t_problema" placeholder="Ej: tienen un proceso manual de aprobación de créditos que tarda 3 días y los clientes se van con la competencia..."></textarea>
      </div>

      <div class="qblock required">
        <span class="qtag qtag-req">Obligatorio</span>
        <p class="qlabel">¿Cuántos usuarios usarán esto y de qué tipo?</p>
        <p class="qhint">Distingue usuarios internos (empleados) de externos (clientes finales). El número importa para estimar escala y costos de infraestructura.</p>
        <textarea id="t_usuarios" placeholder="Ej: 15 vendedores internos + aproximadamente 2.000 clientes externos que compran online..."></textarea>
      </div>

      <div class="qblock">
        <p class="qlabel">¿En qué plataformas debe funcionar?</p>
        <div class="check-group">
          <label class="check-item"><input type="checkbox" name="plataformas" value="Web escritorio"><span>Web escritorio</span></label>
          <label class="check-item"><input type="checkbox" name="plataformas" value="Web mobile (responsive)"><span>Web mobile (responsive)</span></label>
          <label class="check-item"><input type="checkbox" name="plataformas" value="App iOS nativa"><span>App iOS nativa</span></label>
          <label class="check-item"><input type="checkbox" name="plataformas" value="App Android nativa"><span>App Android nativa</span></label>
          <label class="check-item"><input type="checkbox" name="plataformas" value="Tablet / kiosco / dispositivo específico"><span>Tablet / kiosco / dispositivo específico</span></label>
          <label class="check-item"><input type="checkbox" name="plataformas" value="No lo saben aún"><span>No lo saben aún</span></label>
        </div>
      </div>

      <div class="qblock">
        <p class="qlabel">¿Tienen algo documentado o como referencia?</p>
        <div class="check-group">
          <label class="check-item"><input type="checkbox" name="docs" value="Tienen documento de requerimientos"><span>Tienen documento de requerimientos (aunque sea informal)</span></label>
          <label class="check-item"><input type="checkbox" name="docs" value="Tienen wireframes o diseños"><span>Tienen wireframes o diseños</span></label>
          <label class="check-item"><input type="checkbox" name="docs" value="Tienen referencia de producto similar"><span>Tienen referencia de producto similar ("algo como X")</span></label>
          <label class="check-item"><input type="checkbox" name="docs" value="No tienen nada documentado"><span>No tienen nada documentado, parten desde cero</span></label>
        </div>
      </div>

      <div class="qblock required">
        <span class="qtag qtag-req">Obligatorio</span>
        <p class="qlabel">¿Para cuándo lo necesitan y por qué esa fecha?</p>
        <p class="qhint">La causa de la fecha importa tanto como la fecha. "Lo antes posible" no es una fecha.</p>
        <textarea id="t_fecha" placeholder="Ej: necesitan para agosto porque tienen una feria donde lo van a mostrar / hay un contrato que vence..."></textarea>
      </div>

      <div class="nav">
        <button class="btn" onclick="goBack()">← Anterior</button>
        <button class="btn btn-primary" onclick="goNext()">Siguiente →</button>
      </div>
    </div>

    <!-- SECCIÓN 2A: Integración -->
    <div class="section" id="s2_integ">
      <span class="section-badge badge-integ">Paso 3 de 4 · Integración</span>
      <h1 class="section-title">Sistemas e información técnica</h1>
      <p class="section-sub">Esta sección es la más crítica. Puede requerir una segunda llamada si el cliente no tiene la información en la reunión.</p>

      <div class="qblock required">
        <span class="qtag qtag-req">Obligatorio</span>
        <p class="qlabel">¿Con qué sistemas exactamente debe integrarse?</p>
        <p class="qhint">Pregunta el nombre exacto y la versión si la saben. No aceptes "tienen un sistema propio" sin más detalle.</p>
        <textarea id="i_sistemas" placeholder="Ej: SAP Business One v10, sistema de facturación propio en Visual FoxPro (sin versión conocida), tienda en WooCommerce..."></textarea>
      </div>

      <div class="qblock required">
        <span class="qtag qtag-req">Obligatorio</span>
        <p class="qlabel">¿Los sistemas tienen API? ¿Alguien en el cliente sabe cómo funcionan por dentro?</p>
        <p class="qhint">Pregunta: "¿tienen una persona que sepa cómo está construido ese sistema?"</p>
        <div class="pills" id="pills-api">
          <div class="pill" onclick="selectPill(this,'pills-api')">Sí, API documentada</div>
          <div class="pill" onclick="selectPill(this,'pills-api')">Sí, sin documentación</div>
          <div class="pill" onclick="selectPill(this,'pills-api')">No tiene API, solo BD directa</div>
          <div class="pill" onclick="selectPill(this,'pills-api')">No lo saben</div>
        </div>
        <div class="alert-box"><strong>Si eligieron "No lo saben":</strong> es el dato más importante del brief. El equipo técnico necesitará una sesión de discovery técnico antes de poder estimar.</div>
        <textarea id="i_api_quien" style="margin-top:10px" placeholder="Nombre y cargo de quien sabe cómo funciona el sistema internamente (si existe)..."></textarea>
      </div>

      <div class="qblock">
        <span class="qtag qtag-alert">Alerta de complejidad</span>
        <p class="qlabel">¿La integración es en tiempo real o por lotes (batch)?</p>
        <p class="qhint">Tiempo real puede costar 3-5x más que batch. Esta decisión cambia la arquitectura completa.</p>
        <div class="pills" id="pills-sync">
          <div class="pill" onclick="selectPill(this,'pills-sync')">Tiempo real</div>
          <div class="pill" onclick="selectPill(this,'pills-sync')">Batch / programada</div>
          <div class="pill" onclick="selectPill(this,'pills-sync')">Mixto</div>
          <div class="pill" onclick="selectPill(this,'pills-sync')">No lo saben</div>
        </div>
      </div>

      <div class="qblock">
        <p class="qlabel">¿Hay datos históricos que migrar?</p>
        <div class="pills" id="pills-mig">
          <div class="pill" onclick="selectPill(this,'pills-mig')">Sí, con volumen conocido</div>
          <div class="pill" onclick="selectPill(this,'pills-mig')">Sí, sin saber cuánto</div>
          <div class="pill" onclick="selectPill(this,'pills-mig')">No hay migración</div>
          <div class="pill" onclick="selectPill(this,'pills-mig')">No están seguros</div>
        </div>
        <textarea id="i_migracion" style="margin-top:10px" placeholder="Detalle si lo tienen: tipo de datos, años de historia, formato actual..."></textarea>
      </div>

      <div class="nav">
        <button class="btn" onclick="goBack()">← Anterior</button>
        <button class="btn btn-primary" onclick="goNext()">Siguiente →</button>
      </div>
    </div>

    <!-- SECCIÓN 2B: Plataforma -->
    <div class="section" id="s2_plat">
      <span class="section-badge badge-plat">Paso 3 de 4 · Plataforma / App</span>
      <h1 class="section-title">Alcance y funcionalidades</h1>
      <p class="section-sub">Para plataformas el riesgo principal es el scope creep. Esta sección busca detectar funcionalidades ocultas antes de estimar.</p>

      <div class="qblock required">
        <span class="qtag qtag-req">Obligatorio</span>
        <p class="qlabel">¿Cuáles son los 3 flujos principales que tiene que cubrir?</p>
        <p class="qhint">Un flujo es un proceso de inicio a fin. Pídele que los explique como si le contara a alguien nuevo en la empresa.</p>
        <textarea id="p_flujos" placeholder="Ej: 1. vendedor crea cotización → cliente aprueba → se genera OC&#10;2. bodeguero registra entrada → sistema actualiza stock automáticamente"></textarea>
      </div>

      <div class="qblock required">
        <span class="qtag qtag-req">Obligatorio</span>
        <p class="qlabel">¿Hay roles distintos con permisos diferentes?</p>
        <p class="qhint">Un sistema con 3 roles puede ser 2-3x más complejo que uno con un solo perfil.</p>
        <div class="pills" id="pills-roles">
          <div class="pill" onclick="selectPill(this,'pills-roles')">Sí, múltiples roles</div>
          <div class="pill" onclick="selectPill(this,'pills-roles')">No, todos ven lo mismo</div>
          <div class="pill" onclick="selectPill(this,'pills-roles')">No lo saben aún</div>
        </div>
        <textarea id="p_roles" style="margin-top:10px" placeholder="Describir los roles si los mencionaron: administrador, supervisor, vendedor, cliente..."></textarea>
      </div>

      <div class="qblock">
        <span class="qtag qtag-alert">Detector de complejidad oculta</span>
        <p class="qlabel">¿El cliente mencionó alguna de estas funcionalidades?</p>
        <p class="qhint">Marca todo lo que apareció, aunque lo hayan dicho de pasada. 3 o más ítems = no dar estimación verbal.</p>
        <div class="check-group">
          <label class="check-item"><input type="checkbox" name="complejidad" value="Notificaciones automáticas"><span>Notificaciones automáticas (email, SMS, WhatsApp)</span></label>
          <label class="check-item"><input type="checkbox" name="complejidad" value="Reportes o dashboards"><span>Reportes o dashboards con métricas</span></label>
          <label class="check-item"><input type="checkbox" name="complejidad" value="Pagos o facturación electrónica"><span>Pagos o facturación electrónica</span></label>
          <label class="check-item"><input type="checkbox" name="complejidad" value="Carga masiva de datos"><span>Carga masiva de datos (Excel, CSV)</span></label>
          <label class="check-item"><input type="checkbox" name="complejidad" value="Modo offline"><span>Funcionar sin internet (modo offline)</span></label>
          <label class="check-item"><input type="checkbox" name="complejidad" value="Firma digital"><span>Firma digital o validación de identidad</span></label>
          <label class="check-item"><input type="checkbox" name="complejidad" value="Geolocalización"><span>Geolocalización o mapas</span></label>
          <label class="check-item"><input type="checkbox" name="complejidad" value="IA o automatización"><span>Inteligencia artificial o automatización</span></label>
        </div>
      </div>

      <div class="qblock">
        <p class="qlabel">¿Se conecta con algún sistema existente del cliente?</p>
        <textarea id="p_sistemas" placeholder="Ej: debe sincronizarse con ERP actual / extraer datos del CRM / conectarse con pasarela de pagos..."></textarea>
      </div>

      <div class="nav">
        <button class="btn" onclick="goBack()">← Anterior</button>
        <button class="btn btn-primary" onclick="goNext()">Siguiente →</button>
      </div>
    </div>

    <!-- SECCIÓN 2C: Sitio web -->
    <div class="section" id="s2_web">
      <span class="section-badge badge-web">Paso 3 de 4 · Sitio web</span>
      <h1 class="section-title">Tipo y alcance</h1>
      <p class="section-sub">La diferencia entre un sitio informativo y uno transaccional puede ser 4-5x en costo.</p>

      <div class="qblock required">
        <span class="qtag qtag-req">Obligatorio</span>
        <p class="qlabel">¿El sitio solo muestra información o también procesa acciones?</p>
        <p class="qhint">Acciones = comprar, registrarse, cotizar, agendar, pagar, descargar con login.</p>
        <div class="pills" id="pills-web-tipo">
          <div class="pill" onclick="selectPill(this,'pills-web-tipo')">Solo informativo</div>
          <div class="pill" onclick="selectPill(this,'pills-web-tipo')">Formularios simples</div>
          <div class="pill" onclick="selectPill(this,'pills-web-tipo')">E-commerce / pagos</div>
          <div class="pill" onclick="selectPill(this,'pills-web-tipo')">Portal con login</div>
          <div class="pill" onclick="selectPill(this,'pills-web-tipo')">Mixto</div>
        </div>
      </div>

      <div class="qblock required">
        <span class="qtag qtag-req">Obligatorio</span>
        <p class="qlabel">¿Quién actualiza el contenido del sitio?</p>
        <p class="qhint">Si el cliente actualiza el contenido, necesita CMS. Sin CMS el sitio queda obsoleto en meses.</p>
        <div class="pills" id="pills-cms">
          <div class="pill" onclick="selectPill(this,'pills-cms')">El cliente solo — necesita CMS</div>
          <div class="pill" onclick="selectPill(this,'pills-cms')">Lo actualiza GUX</div>
          <div class="pill" onclick="selectPill(this,'pills-cms')">Contenido estático</div>
          <div class="pill" onclick="selectPill(this,'pills-cms')">No lo han pensado</div>
        </div>
      </div>

      <div class="qblock">
        <p class="qlabel">¿Tienen dominio, hosting y marca gráfica definida?</p>
        <div class="check-group">
          <label class="check-item"><input type="checkbox" name="web-activos" value="Tienen dominio propio"><span>Tienen dominio propio</span></label>
          <label class="check-item"><input type="checkbox" name="web-activos" value="Tienen hosting"><span>Tienen hosting o preferencia de plataforma</span></label>
          <label class="check-item"><input type="checkbox" name="web-activos" value="Tienen manual de marca"><span>Tienen manual de marca o branding definido</span></label>
          <label class="check-item"><input type="checkbox" name="web-activos" value="Necesitan todo desde cero"><span>Necesitan todo desde cero</span></label>
        </div>
      </div>

      <div class="qblock">
        <p class="qlabel">¿Tiene requisitos de SEO o rendimiento específicos?</p>
        <textarea id="w_seo" placeholder="Ej: necesitan aparecer en primera página de Google / tienen tráfico actual que no quieren perder en la migración..."></textarea>
      </div>

      <div class="nav">
        <button class="btn" onclick="goBack()">← Anterior</button>
        <button class="btn btn-primary" onclick="goNext()">Siguiente →</button>
      </div>
    </div>

    <!-- SECCIÓN 2D: Licitación -->
    <div class="section" id="s2_licit">
      <span class="section-badge badge-licit">Paso 3 de 4 · Licitación</span>
      <h1 class="section-title">Bases y contraparte técnica</h1>
      <p class="section-sub">El equipo técnico necesita los documentos correctos para estimar una licitación.</p>

      <div class="qblock required">
        <span class="qtag qtag-req">Obligatorio</span>
        <p class="qlabel">¿Tienes las bases técnicas completas?</p>
        <div class="pills" id="pills-bases">
          <div class="pill" onclick="selectPill(this,'pills-bases')">Sí, bases completas</div>
          <div class="pill" onclick="selectPill(this,'pills-bases')">Bases parciales o borrador</div>
          <div class="pill" onclick="selectPill(this,'pills-bases')">Aún no publicadas</div>
        </div>
        <div class="alert-box"><strong>Regla:</strong> si el plazo es menor a 5 días hábiles y no hay bases completas, escalar de inmediato al equipo técnico para evaluar si es viable participar.</div>
      </div>

      <div class="qblock required">
        <span class="qtag qtag-req">Obligatorio</span>
        <p class="qlabel">Fecha de cierre y tiempo real disponible</p>
        <p class="qhint">Fecha exacta de cierre + cuántos días hábiles tiene el equipo para preparar la propuesta técnica.</p>
        <textarea id="l_plazo" placeholder="Ej: cierre el 15 de julio, quedan 8 días hábiles..."></textarea>
      </div>

      <div class="qblock">
        <p class="qlabel">¿Hay sistema legado que reemplazar o integrar?</p>
        <textarea id="l_legado" placeholder="Ej: reemplaza sistema en Visual Basic 6 / debe integrarse con plataforma de firma electrónica del Estado..."></textarea>
      </div>

      <div class="qblock">
        <p class="qlabel">Contraparte técnica en el organismo licitante</p>
        <p class="qhint">Nombre y cargo. Si hay período de consultas, ¿cuándo vence?</p>
        <input type="text" id="l_contraparte" placeholder="Ej: María González, Jefa de TI — consultas vencen el 10 de julio">
      </div>

      <div class="qblock">
        <p class="qlabel">¿Las bases definen alguno de estos requisitos técnicos?</p>
        <div class="check-group">
          <label class="check-item"><input type="checkbox" name="licit-sla" value="Disponibilidad 24/7"><span>Disponibilidad 24/7 o porcentaje de uptime</span></label>
          <label class="check-item"><input type="checkbox" name="licit-sla" value="Hosting en Chile"><span>Hosting en Chile o servidor local obligatorio</span></label>
          <label class="check-item"><input type="checkbox" name="licit-sla" value="Tiempos de respuesta"><span>Tiempos de respuesta máximos definidos</span></label>
          <label class="check-item"><input type="checkbox" name="licit-sla" value="Certificaciones de seguridad"><span>Certificaciones de seguridad específicas</span></label>
          <label class="check-item"><input type="checkbox" name="licit-sla" value="Sin requisitos técnicos especiales"><span>No especifican nada en ese nivel</span></label>
        </div>
      </div>

      <div class="nav">
        <button class="btn" onclick="goBack()">← Anterior</button>
        <button class="btn btn-primary" onclick="goNext()">Siguiente →</button>
      </div>
    </div>

    <!-- SECCIÓN 3: Cierre -->
    <div class="section" id="s3">
      <span class="section-badge badge-close">Paso 4 de 4</span>
      <h1 class="section-title">Contexto de la reunión</h1>
      <p class="section-sub">Lo que no encaja en las preguntas anteriores pero el equipo técnico necesita saber.</p>

      <div class="qblock required">
        <span class="qtag qtag-req">Obligatorio</span>
        <p class="qlabel">Nombre del cliente o empresa</p>
        <input type="text" id="c_cliente" placeholder="Ej: Empresa ABC / Juan Pérez — Fintech XYZ">
      </div>

      <div class="qblock">
        <p class="qlabel">¿Quién toma decisiones técnicas en el cliente?</p>
        <p class="qhint">Nombre y cargo. Si no hay nadie técnico, anota quién aprueba y su perfil.</p>
        <input type="text" id="c_decisor" placeholder="Ej: Carlos Rojas, Gerente de TI / Ana Martínez, Gerente General (sin perfil técnico)">
      </div>

      <div class="qblock">
        <p class="qlabel">Madurez técnica percibida del cliente</p>
        <div class="pills" id="pills-madurez">
          <div class="pill" onclick="selectPill(this,'pills-madurez')">Alta — tienen equipo técnico propio</div>
          <div class="pill" onclick="selectPill(this,'pills-madurez')">Media — entienden el mundo digital</div>
          <div class="pill" onclick="selectPill(this,'pills-madurez')">Baja — primera vez con un equipo de desarrollo</div>
        </div>
      </div>

      <div class="qblock">
        <p class="qlabel">¿Algo inusual en la reunión?</p>
        <p class="qhint">Cambios de alcance, contradicciones entre personas del cliente, expectativas poco realistas, proveedor anterior que falló...</p>
        <textarea id="c_obs" placeholder="Ej: el CEO y el encargado de TI tenían expectativas distintas sobre el alcance..."></textarea>
      </div>

      <div class="qblock">
        <p class="qlabel">Tu nombre (comercial que completó este brief)</p>
        <input type="text" id="c_comercial" placeholder="Tu nombre">
      </div>

      <div class="error-msg" id="error-msg">Hubo un error al enviar el brief. Por favor intenta nuevamente.</div>

      <div class="nav">
        <button class="btn" onclick="goBack()">← Anterior</button>
        <button class="btn btn-submit" id="btn-submit" onclick="submitForm()">Enviar brief →</button>
      </div>
    </div>

  </main>
</div>

<script>
  // Estado
  let projectType = null;
  let currentStep = 0;

  const sectionOrder = () => ['s0', 's1', 's2_' + projectType, 's3'];

  const stepLabels = {
    integ: 'Integración',
    plat:  'Plataforma / App',
    web:   'Sitio web',
    licit: 'Licitación'
  };

  // Selección de tipo
  function selectType(type, el) {
    projectType = type;
    document.querySelectorAll('.type-card').forEach(c => c.classList.remove('selected'));
    el.classList.add('selected');
    document.getElementById('btn-next-0').disabled = false;
    document.getElementById('branch-label').textContent = stepLabels[type];
  }

  // Navegar hacia adelante
  function goNext() {
    if (!projectType) return;
    const flow = sectionOrder();
    document.getElementById(flow[currentStep]).classList.remove('active');
    currentStep++;
    document.getElementById(flow[currentStep]).classList.add('active');
    updateUI();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Navegar hacia atrás
  function goBack() {
    const flow = sectionOrder();
    document.getElementById(flow[currentStep]).classList.remove('active');
    currentStep--;
    document.getElementById(flow[currentStep]).classList.add('active');
    updateUI();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Actualizar sidebar y barra de progreso
  function updateUI() {
    const total = 4;
    const pct = Math.round(((currentStep) / total) * 100);
    document.getElementById('progress').style.width = pct + '%';

    document.querySelectorAll('.step').forEach((s, i) => {
      s.classList.remove('active', 'done');
      if (i === currentStep) s.classList.add('active');
      else if (i < currentStep) s.classList.add('done');
    });
  }

  // Pills (selección única)
  function selectPill(el, groupId) {
    document.querySelectorAll('#' + groupId + ' .pill').forEach(p => p.classList.remove('selected'));
    el.classList.add('selected');
  }

  // Obtener checkboxes marcados
  function getChecked(name) {
    return Array.from(document.querySelectorAll(`input[name="${name}"]:checked`))
      .map(c => c.value).join(', ') || '—';
  }

  // Obtener valor de pill seleccionada
  function getPill(groupId) {
    const sel = document.querySelector('#' + groupId + ' .pill.selected');
    return sel ? sel.textContent.trim() : '—';
  }

  // Obtener valor de textarea/input
  function getVal(id) {
    const el = document.getElementById(id);
    return el && el.value.trim() ? el.value.trim() : '—';
  }

  // Detectar alertas
  function getAlertas() {
    const alertas = [];

    if (projectType === 'integ') {
      const api = getPill('pills-api');
      if (api.includes('No lo saben')) alertas.push('🔴 El cliente no sabe si sus sistemas tienen API — requiere sesión de discovery técnico antes de estimar.');
      const sync = getPill('pills-sync');
      if (sync === 'Tiempo real') alertas.push('🟡 Integración en tiempo real — puede ser 3-5x más costosa que batch.');
      const mig = getPill('pills-mig');
      if (mig.includes('no saben') || mig.includes('seguros')) alertas.push('🟡 Migración de datos sin volumen conocido — agregar buffer en estimación.');
    }

    if (projectType === 'plat') {
      const compl = document.querySelectorAll('input[name="complejidad"]:checked').length;
      if (compl >= 3) alertas.push(`🔴 ${compl} funcionalidades de alta complejidad detectadas — el alcance real probablemente duplica lo que el cliente imagina. No dar estimación verbal.`);
    }

    if (projectType === 'licit') {
      const bases = getPill('pills-bases');
      if (!bases.includes('completas')) alertas.push('🔴 Licitación sin bases técnicas completas — no se puede estimar hasta tenerlas.');
    }

    const madurez = getPill('pills-madurez');
    if (madurez.includes('Baja')) alertas.push('🟡 Cliente con baja madurez técnica — contemplar costo adicional de gestión en la estimación.');

    const obs = getVal('c_obs');
    if (obs !== '—' && obs.toLowerCase().includes('falló')) alertas.push('🔴 El brief menciona un proveedor previo que falló — el equipo técnico necesita saber por qué antes de comprometerse.');

    return alertas.length > 0 ? alertas.join('\n') : '✅ Sin alertas críticas detectadas.';
  }

  // Construir datos del formulario
  function buildData() {
    const typeNames = { integ: 'Integración', plat: 'Plataforma / App', web: 'Sitio web', licit: 'Licitación' };

    const base = {
      tipo: typeNames[projectType],
      cliente: getVal('c_comercial') !== '—' ? `${getVal('c_cliente')} (enviado por ${getVal('c_comercial')})` : getVal('c_cliente'),
      problema: getVal('t_problema'),
      usuarios: getVal('t_usuarios'),
      plataformas: getChecked('plataformas'),
      docs: getChecked('docs'),
      fecha: getVal('t_fecha'),
      decisor: getVal('c_decisor'),
      madurez: getPill('pills-madurez'),
      observaciones: getVal('c_obs'),
      alertas: getAlertas(),
    };

    if (projectType === 'integ') {
      base.sistemas = getVal('i_sistemas');
      base.api = getPill('pills-api');
      base.api_quien = getVal('i_api_quien');
      base.sync = getPill('pills-sync');
      base.migracion = getPill('pills-mig');
      base.migracion_det = getVal('i_migracion');
    }

    if (projectType === 'plat') {
      base.flujos = getVal('p_flujos');
      base.roles = getPill('pills-roles');
      base.roles_det = getVal('p_roles');
      base.complejidad = getChecked('complejidad');
      base.sistemas_plat = getVal('p_sistemas');
    }

    if (projectType === 'web') {
      base.web_tipo = getPill('pills-web-tipo');
      base.cms = getPill('pills-cms');
      base.web_activos = getChecked('web-activos');
      base.seo = getVal('w_seo');
    }

    if (projectType === 'licit') {
      base.bases = getPill('pills-bases');
      base.plazo = getVal('l_plazo');
      base.legado = getVal('l_legado');
      base.contraparte = getVal('l_contraparte');
      base.sla = getChecked('licit-sla');
    }

    return base;
  }

  // Enviar formulario
  async function submitForm() {
    const btn = document.getElementById('btn-submit');
    const errorMsg = document.getElementById('error-msg');

    // Validación básica
    if (!getVal('c_cliente') || getVal('c_cliente') === '—') {
      alert('Por favor ingresa el nombre del cliente.');
      return;
    }

    btn.textContent = 'Enviando...';
    btn.classList.add('loading');
    errorMsg.classList.remove('show');

    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(buildData()),
      });

      if (!res.ok) throw new Error('Error del servidor');

      // Mostrar pantalla de éxito
      document.getElementById('s3').classList.remove('active');
      document.getElementById('success').classList.add('show');
      document.getElementById('progress').style.width = '100%';

    } catch (err) {
      errorMsg.classList.add('show');
      btn.textContent = 'Enviar brief →';
      btn.classList.remove('loading');
    }
  }

  // Resetear formulario
  function resetForm() {
    location.reload();
  }
</script>

</body>
</html>
