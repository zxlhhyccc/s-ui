export default {
  message: "Welcome",
  success: "success",
  failed: "failed",
  enable: "Enable",
  disable: "Disable",
  none: "None",
  all: "All",
  filter: "Filter",
  loading: "Loading...",
  confirm: "Are you sure ?",
  yes: "yes",
  no: "no",
  unlimited: "infinite",
  remained: "Remained",
  type: "Type",
  protocol: "Protocol",
  submit: "Submit",
  reset: "Reset",
  now: "Now",
  network: "Network",
  copyToClipboard: "Copy to clipboard",
  noData: "No data!",
  invalidLogin: "Invalid Login!",
  online: "Online",
  version: "Version",
  email: "Email",
  commaSeparated: "(comma separated)",
  count: "Count",
  template: "Template",
  error: {
    dplData: "Duplicate Data",
    core: "Sing-Box Error",
  },
  pages: {
    login: "Login",
    home: "Home",
    inbounds: "Inbounds",
    outbounds: "Outbounds",
    clients: "Clients",
    rules: "Rules",
    tls: "TLS Settings",
    basics: "Basics",
    admins: "Admins",
    settings: "Settings",
  },
  main: {
    tiles: "Tiles",
    gauges: "Gauges",
    charts: "Charts",
    infos: "Information",
    gauge: {
      cpu: "CPU Gauge",
      mem: "RAM Gauge",
    },
    chart: {
      cpu: "CPU Monitor",
      mem: "RAM Monitor",
      net: "Network Bandwidth",
      pnet: "Network Packets",
    },
    info: {
      sys: "System Info",
      sbd: "Sing-Box Info",
      host: "Host",
      cpu: "CPU",
      core: "Core",
      uptime: "Uptime",
      threads: "Threads",
      memory: "Memory",
      running: "Running"
    }
  },
  objects: {
    inbound: "Inbound",
    client: "Client",
    outbound: "Outbound",
    rule: "Rule",
    user: "User",
    tag: "Tag",
    listen: "Listen",
    dial: "Dial",
    tls: "TLS",
    multiplex: "Multiplex",
    transport: "Transport",
    method: "Method",
    headers: "Headers",
    key: "Key",
    value: "Value",
  },
  actions: {
    action: "Action",
    add: "Add",
    new: "New",
    edit: "Edit",
    del: "Delete",
    clone: "Clone",
    save: "Save",
    update: "Update",
    submit: "Submit",
    set: "Set",
    generate: "Generate",
    disable: "Disable",
    close: "Close",
    restartApp: "Restart App",
  },
  login: {
    title: "Login",
    username: "Username",
    unRules: "Username can not be empty",
    password: "Password",
    pwRules: "Password can not be empty",
  },
  menu: {
    logout: "Logout",
  },
  admin: {
    changeCred: "Change credentials",
    oldPass: "Current Password",
    newUname: "New Username",
    newPass: "New Password",
    lastLogin: "Last login",
    date: "Date",
    time: "Time",
    changes: "Changes",
    actor: "Actor",
    key: "Key",
    action: "Action",
  },
  setting: {
    interface: "Interface",
    sub: "Subscription",
    addr: "Address",
    port: "Port",
    webPath: "Base URI",
    domain: "Domain",
    sslKey: "SSL Key Path",
    sslCert: "SSL Certificate Path",
    webUri: "Panel URI",
    sessionAge: "Session Maximum Age",
    trafficAge: "Traffic Maximum Age",
    timeLoc: "Timezone Location",
    subEncode: "Enable Encoding",
    subInfo: "Enable Client Info",
    path: "Default Path",
    update: "Automatic Update Time",
    subUri: "Subscription URI",
    jsonSub: "JSON Subscription",
    toDirect: "Route to Direct",
    toBlock: "Route to Block",
    timestamp: "Timestamp",
    globalDns: "Global DNS",
    directDns: "Direct DNS",
    toDirectDns: "Route to Direct DNS",
    jsonSubOptions: "Other Options",
  },
  client: {
    name: "Name",
    desc: "Description",
    inboundTags: "Inbound Tags",
    basics: "Basics",
    config: "Config",
    links: "Links",
    external: "External Link",
    sub: "External Subscription",
  },
  types: {
    un: "Username",
    pw: "Password",
    direct: {
      overrideAddr: "Override Address",
      overridePort: "Override Port",
    },
    hy: {
      obfs: "Obfuscated Password",
      auth: "Authentication Password",
      hyOptions: "Hysteria Options",
      hy2Options: "Hysteria2 Options",
      ignoreBw: "Ignore Client Bandwidth",
    },
    shdwTls: {
      hs: "Handshake Server",
      addHS: "Add Handshake Server",
    },
    ssh: {
      passphrase: "Passphrase",
      hostKey: "Host Keys",
      algorithm: "Key Algorithms",
      clientVer: "Client Version",
      options: "SSH Options",
    },
    tor: {
      execPath: "Executable File Path",
      dataDir: "Data Directory",
      extArgs: "Extra Args",
    },
    tuic: {
      congControl: "Congestion Control",
      authTimeout: "Authentication Timeout",
      hb: "Heartbeat",
    },
    vless: {
      flow: "Flow",
      udpEnc: "UDP Packet Encoding",
    },
    vmess: {
      security: "Security",
      globalPadding: "Global Padding",
      authLen: "Encryptrd Length",
    },
    wg: {
      privKey: "Private Key",
      pubKey: "Peer Public Key",
      psk: "Pre-Shared Key",
      localIp: "Local IPs",
      worker: "Workers",
      ifName: "Interface Name",
      sysIf: "System Interface",
      gso: "Segmentation Offload",
      options: "Wireguard Options",
      multiPeer: "Multi Peer",
      allowedIp: "Allowed IPs",
      peer: "Peer",
      peers: "Peers",
    },
    lb: {
      defaultOut: "Default Outbound",
      interruptConn: "Interrupt exist connections",
      testUrl: "Test URL",
      interval: "Interval",
      tolerance: "Tolerance",
      urlTestOptions: "URLTest Options"
    }
  },
  in: {
    addr: "Address",
    port: "Port",
    clients: "Enable Clients",
    ssMethod: "Method",
    sSide: "Server Side",
    cSide: "Client Side",
    multiDomain: "Multi Domain",
    remark: "Remark",
    mdOption: "Multi Domain Options",
  },
  listen: {
    sniffing: "Sniffing",
    sniffingTimeout: "Sniffing Timeout",
    sniffingOverride: "Override Destation",
    options: "Listen Options",
    tcpOptions: "TCP Options",
    udpOptions: "UDP Options",
    detour: "Detour",
    detourText: "Forward to inbound",
    domainStrategy: "Domain Strategy",
  },
  dial: {
    bindIf: "Bind to Network Interface",
    bindIp4: "Bind to IPv4",
    bindIp6: "Bind to IPv6",
    reuseAddr: "Reuse Listener Address",
    connTimeout: "Connection Timeout",
    fbTimeout: "Fallback Timeout",
    options: "Dial Options",
    detourText: "Forward to outbound",
  },
  transport: {
    enable: "Enable Transport",
    host: "Host",
    hosts: "Hosts",
    path: "Path",
    httpMethod: "Request Method",
    idleTimeout: "Idle Timeout",
    pingTimeout: "Ping Timeout",
    grpcServiceName: "Service Name",
    grpcPws: "Permit Without Stream",
  },
  mux: {
    enable: "Enable Multiplex",
    maxConn: "Max Connections",
    minStr: "Min Streams",
    maxStr: "Max Streams",
    padding: "Only padding",
    enableBrutal: "Enable Brutal",
  },
  out: {
    addr: "Server Address",
    port: "Server Port",
  },
  rule: {
    add: "Add Rule",
    simple: "Simple",
    logical: "Logical",
    mode: "Mode",
    invert: "Invert",
    ipVer: "IP Version",
    domain: "Domains",
    domainSufix: "Domain Suffixes",
    domainKw: "Domain Keywords",
    domainRgx: "Domain Regexes",
    ip: "IP CIDRs",
    privateIp: "Invalid IP Ranges",
    port: "Ports",
    portRange: "Port Ranges",
    srcCidr: "Source IP CIDRs",
    srcPrivateIp: "Invalid Source IPs",
    srcPort: "Source Ports",
    srcPortRange: "Source Port Ranges",
    ruleset: "Rulesets",
    rulesetMatchSrc: "Ruleset IPcidr Match Source",
    options: "Rule Options",
    domainRules: "Domain/IP",
    srcIpRules: "Source IP",
    srcPortRules: "Source Port",
  },
  ruleset: {
    add: "Add Ruleset",
    format: "Data Format",
    interval: "Update Intervals",
    remote: "Remote",
    local: "Local",
  },
  basic: {
    log: {
      title: "Logs",
      level: "Level",
      output: "Output",
      timestamp: "Enable Timestamp",
    },
    dns: {
      final: "Final",
      server: "Server",
      firstServer: "First Server",
      addrResolver: "Address Resolver",
    },
    routing: {
      title: "Routing",
      defaultOut: "Default Outbound",
      defaultIf: "Default NIC",
      defaultRm: "Default Routing Mark",
      autoBind: "Auto Bind NIC",
    },
    exp: {
      storeFakeIp: "Store Fake IP",
    },
  },
  tls: {
    enable: "Enable TLS",
    usePath: "Use Path",
    useText: "Use Text",
    certPath: "Certificate File Path",
    keyPath: "Key File Path",
    cert: "Certificate",
    key: "Key",
    options: "TLS Options",
    minVer: "Minimum Version",
    maxVer: "Maximum Version",
    cs: "Cipher suits",
    privKey: "Private Key",
    pubKey: "Public Key",
    disableSni: "Disable SNI",
    insecure: "Allow Insecure",
    acme: {
      options: "ACME Options",
      dataDir: "Data Directory",
      defaultDomain: "Default Domain",
      disableChallenges: "Disable Challenges",
      httpChallenge: "Disable HTTP Challenge",
      tlsChallenge: "Disable TLS Challenge",
      altPorts: "Alternative Ports",
      altHport: "Alternative HTTP Port",
      altTport: "Alternative TLS Port",
      caProvider: "CA Provider",
      customCa: "Custom CA Provider",
      extAcc: "External Account",
      dns01: "DNS01 Challenge",
      dns01Provider: "DNS01 Challenge Provider",
    },
  },
  stats: {
    upload: "Upload",
    download: "Download",
    volume: "Volume",
    usage: "Usage",
    enable: "Enable Statistics",
    graphTitle: "Traffic Chart",
    B: "B",
    KB: "KB",
    MB: "MB",
    GB: "GB",
    TB: "TB",
    PB: "PB",
    p: "p",
    Kp: "Kp",
    Mp: "Mp",
    Gb: "Gb",
    bps: "bps",
    Kbps: "Kbps",
    Mbps: "Mbps",
  },
  date: {
    expiry: "Expiry",
    expired: "Expired",
    d: "d",
    h: "h",
    m: "m",
    s: "s",
    ms: "ms",
  },
}