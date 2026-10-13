/* ===== TEXT: edit English (en) and Amharic (am) here ===== */
var T = {
  en: {
    tagline: "We Turn Business Problems Into Digital Solutions.",
    contactCta: "Contact Us",
    servicesTitle: "Our services",
    s1t: "Website Development",
    s1d: "Business websites, landing pages, restaurant menus, and product catalogs.",
    s1f: "For shops, restaurants, schools, and offices.",
    s2t: "Custom Software Solutions",
    s2d: "Systems to manage stock, sales, bookings, and records.",
    s2f: "For shops, schools, offices, and growing organizations.",
    s3t: "NFC & QR Solutions",
    s3d: "Smart cards and QR codes that connect people to digital info with a tap or scan.",
    s3f: "For restaurants, shops, professionals, hotels, and event organizers.",
    s4t: "Video Editing & Social Media Content",
    s4d: "Promo videos, reels, and product showcases.",
    s4f: "For restaurants, clothing brands, cafés, salons, and product sellers.",
    s5t: "App Development",
    s5d: "Apps for booking, ordering, and customer services.",
    s5f: "For businesses that need specialized apps.",
    contactTitle: "Contact Us",
    contactSub: "Tell us about your business. We will help.",
    telegram: "Telegram",
    whatsapp: "WhatsApp",
    call: "Call Us",
    footer: "© 2026 Khedo Digital Solutions"
  },
  am: {
    tagline: "የንግድ ችግሮችዎን ወደ ዲጂታል መፍትሄዎች እንቀይራለን።",
    contactCta: "ያግኙን",
    servicesTitle: "አገልግሎቶቻችን",
    s1t: "ድረ ገጽ ልማት",
    s1d: "የንግድ ድረ ገጾችን፣ ማረፊያ ገጾችን፣ የምግብ ቤት ሜኑዎችን እና የምርት ካታሎጎችን እንገነባለን።",
    s1f: "ለሱቆች፣ ምግብ ቤቶች፣ ትምህርት ቤቶች እና ቢሮዎች።",
    s2t: "ብጁ የሶፍትዌር መፍትሄዎች",
    s2d: "ክምችትን፣ ሽያጭን፣ ቀጠሮዎችን እና መዛግብትን ለማስተዳደር የሚረዱ ሲስተሞችን እንሠራለን።",
    s2f: "ለሱቆች፣ ትምህርት ቤቶች፣ ቢሮዎች እና በማደግ ላይ ላሉ ድርጅቶች።",
    s3t: "NFC እና QR መፍትሄዎች",
    s3d: "በአንድ ንክኪ ወይም ስካን ሰዎችን ከዲጂታል መረጃ ጋር የሚያገናኙ ስማርት ካርዶች እና QR ኮዶች።",
    s3f: "ለምግብ ቤቶች፣ ሱቆች፣ ባለሙያዎች፣ ሆቴሎች እና የዝግጅት አዘጋጆች።",
    s4t: "ቪዲዮ ኤዲቲንግ እና የማህበራዊ ሚዲያ ይዘት",
    s4d: "የማስታወቂያ ቪዲዮዎች፣ ሪልሶች እና የምርት ማሳያዎች።",
    s4f: "ለምግብ ቤቶች፣ የልብስ ብራንዶች፣ ካፌዎች፣ ሳሎኖች እና ምርት ሻጮች።",
    s5t: "የመተግበሪያ ልማት",
    s5d: "ለቀጠሮ፣ ለትዕዛዝ እና ለደንበኞች አገልግሎት የሚሆኑ መተግበሪያዎች።",
    s5f: "ልዩ መተግበሪያ ለሚያስፈልጋቸው ንግዶች።",
    contactTitle: "ያግኙን",
    contactSub: "ስለ ንግድዎ ይንገሩን፤ እኛ እንረዳዎታለን።",
    telegram: "ቴሌግራም",
    whatsapp: "ዋትስአፕ",
    call: "ይደውሉልን",
    footer: "© 2026 ኬዶ ዲጂታል ሶሉሽንስ"
  }
};

/* ===== Language logic ===== */
(function () {
  var KEY = "khedo-lang";
  var welcome = document.getElementById("welcome");
  var sw = document.getElementById("switch");
  var current = "en";

  function load() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function save(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }

  function apply(l) {
    current = l;
    document.documentElement.lang = l === "am" ? "am" : "en";
    document.body.classList.toggle("amh", l === "am");
    var els = document.querySelectorAll("[data-t]");
    for (var i = 0; i < els.length; i++) {
      els[i].textContent = T[l][els[i].getAttribute("data-t")];
    }
    sw.textContent = l === "am" ? "English" : "አማርኛ";
    welcome.classList.add("hide");
  }

  var picks = document.querySelectorAll("[data-pick]");
  for (var i = 0; i < picks.length; i++) {
    picks[i].addEventListener("click", function () {
      var l = this.getAttribute("data-pick");
      save(l);
      apply(l);
    });
  }
  sw.addEventListener("click", function () {
    var l = current === "en" ? "am" : "en";
    save(l);
    apply(l);
  });

  var saved = load();
  if (saved === "en" || saved === "am") apply(saved);
})();

/* ===== 3D logo scene (Three.js) ===== */
(function () {
  document.documentElement.classList.add("js");
  var cv = document.getElementById("scene");
  try {
    var r = new THREE.WebGLRenderer({ canvas: cv, alpha: true, antialias: true });
    r.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    var sc = new THREE.Scene();
    var cam = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
    cam.position.set(0, 0, 11);
    sc.add(new THREE.AmbientLight(0xffffff, 0.55));
    var l1 = new THREE.PointLight(0xffd27a, 1.6, 60); l1.position.set(5, 5, 8); sc.add(l1);
    var l2 = new THREE.PointLight(0xffffff, 1, 60); l2.position.set(-6, -3, 7); sc.add(l2);

    var gold = new THREE.MeshPhongMaterial({ color: 0xD4A24C, specular: 0xfff0c0, shininess: 100 });
    var silver = new THREE.MeshPhongMaterial({ color: 0xd6d9de, specular: 0xffffff, shininess: 120 });

    function part(pts, mat) {
      var s = new THREE.Shape();
      s.moveTo(pts[0][0], pts[0][1]);
      for (var i = 1; i < pts.length; i++) s.lineTo(pts[i][0], pts[i][1]);
      s.closePath();
      var g = new THREE.ExtrudeGeometry(s, { depth: 0.4, bevelEnabled: true, bevelThickness: 0.06, bevelSize: 0.05, bevelSegments: 2 });
      g.translate(0, 0, -0.2);
      return new THREE.Mesh(g, mat);
    }
    /* The letter K: silver stem + two gold arms */
    var K = new THREE.Group();
    K.add(part([[-1, -1.2], [-0.4, -1.2], [-0.4, 1.2], [-1, 1.2]], silver));
    K.add(part([[-0.25, -0.05], [0.45, 1.2], [1.15, 1.2], [0.4, -0.05]], gold));
    K.add(part([[0.1, 0.1], [0.8, -1.2], [1.5, -1.2], [0.75, 0.1]], gold));
    K.position.x = -0.3;
    K.scale.set(1.25, 1.25, 1.25);
    var root = new THREE.Group(); root.add(K); sc.add(root);

    /* Gold orbit rings + moving light ball */
    function ring(rad, w, op) {
      var m = new THREE.Mesh(new THREE.TorusGeometry(rad, w, 12, 160), new THREE.MeshBasicMaterial({ color: 0xD4A24C, transparent: true, opacity: op }));
      return m;
    }
    var orbit = new THREE.Group(); orbit.rotation.set(1.15, 0, -0.35);
    orbit.add(ring(3, 0.05, 0.9)); orbit.add(ring(3.7, 0.02, 0.4));
    var ball = new THREE.Mesh(new THREE.SphereGeometry(0.14, 16, 16), new THREE.MeshBasicMaterial({ color: 0xfff0c0 }));
    orbit.add(ball); root.add(orbit);

    /* Floating gold dots */
    var N = 450, pos = new Float32Array(N * 3);
    for (var i = 0; i < N; i++) {
      var a = Math.random() * 6.283, b = Math.acos(2 * Math.random() - 1), rad = 4.4 + Math.random() * 3;
      pos[i * 3] = rad * Math.sin(b) * Math.cos(a);
      pos[i * 3 + 1] = rad * Math.sin(b) * Math.sin(a);
      pos[i * 3 + 2] = rad * Math.cos(b);
    }
    var pg = new THREE.BufferGeometry();
    pg.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    var pts = new THREE.Points(pg, new THREE.PointsMaterial({ color: 0xD4A24C, size: 0.06, transparent: true, opacity: 0.75 }));
    sc.add(pts);

    function size() {
      var w = cv.clientWidth, h = cv.clientHeight;
      if (!w || !h) return;
      r.setSize(w, h, false); cam.aspect = w / h; cam.updateProjectionMatrix();
    }
    size(); window.addEventListener("resize", size);

    var tx = 0, ty = 0;
    window.addEventListener("pointermove", function (e) {
      var b = cv.getBoundingClientRect();
      tx = ((e.clientX - b.left) / b.width - 0.5) * 1.2;
      ty = ((e.clientY - b.top) / b.height - 0.5) * 0.8;
    });

    var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
    var t0 = performance.now();
    (function loop(now) {
      requestAnimationFrame(loop);
      var t = (now - t0) / 1000;
      if (!reduce) {
        root.rotation.y += ((tx + Math.sin(t * 0.6) * 0.35) - root.rotation.y) * 0.05;
        root.rotation.x += (ty - root.rotation.x) * 0.05;
        K.position.y = Math.sin(t * 1.2) * 0.08;
        ball.position.set(Math.cos(t * 1.4) * 3, Math.sin(t * 1.4) * 3, 0);
        orbit.rotation.z = -0.35 + Math.sin(t * 0.3) * 0.1;
        pts.rotation.y = t * 0.03;
      }
      r.render(sc, cam);
    })(performance.now());
  } catch (e) { cv.style.display = "none"; }

  /* 3D tilt + scroll-in for service cards */
  var cards = document.querySelectorAll(".service");
  var io = ("IntersectionObserver" in window) ? new IntersectionObserver(function (es) {
    es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { threshold: 0.15 }) : null;
  cards.forEach(function (c) {
    if (io) io.observe(c); else c.classList.add("in");
    c.addEventListener("pointermove", function (e) {
      var b = c.getBoundingClientRect();
      var x = (e.clientX - b.left) / b.width - 0.5, y = (e.clientY - b.top) / b.height - 0.5;
      c.style.transform = "rotateX(" + (-y * 14) + "deg) rotateY(" + (x * 14) + "deg) translateZ(10px)";
    });
    c.addEventListener("pointerleave", function () { c.style.transform = ""; });
  });
})();
