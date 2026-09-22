/*
==========================================================
SPY.JS — نظام وزارة العدل
==========================================================
*/


/* ========================================================
   الرتب
======================================================== */

const ranks = [

  // قيادة وزارة العدل

  {
    name: "Chief of DOJ",
    ar: "رئيس وزارة العدل",
    section: "Justice Department",
    status: "official",
    desc: "المسؤول الأعلى عن وزارة العدل والإشراف على قطاعاتها."
  },

  {
    name: "Deputy Chief of DOJ",
    ar: "نائب رئيس وزارة العدل",
    section: "Justice Department",
    status: "official",
    desc: "ينوب عن رئيس الوزارة ويتولى الصلاحيات المفوضة إليه."
  },

  {
    name: "Attorney General",
    ar: "Attorney General",
    section: "Justice Department",
    status: "official",
    desc: "القيادة العليا للعمل العام والادعاء والإشراف القانوني."
  },


  // المحامون

  {
    name: "Chief Attorney",
    ar: "رئيس المحامين",
    section: "Attorneys",
    status: "official",
    desc: "الإشراف الإداري والمهني على هيئة المحامين."
  },

  {
    name: "Senior Attorney",
    ar: "محامٍ أول",
    section: "Attorneys",
    status: "active",
    desc: "محامٍ ذو خبرة في القضايا المتقدمة والمرافعات."
  },

  {
    name: "Attorney",
    ar: "محامٍ",
    section: "Attorneys",
    status: "active",
    desc: "محامٍ معتمد لممارسة العمل القانوني."
  },

  {
    name: "Junior Attorney",
    ar: "محامٍ مبتدئ",
    section: "Attorneys",
    status: "active",
    desc: "محامٍ في بداية المسار المهني."
  },

  {
    name: "Trainee Attorney",
    ar: "محامٍ متدرب",
    section: "Attorneys",
    status: "training",
    desc: "متدرب يمارس المهارات القانونية تحت الإشراف."
  },

  {
    name: "Law Student",
    ar: "طالب قانون",
    section: "Attorneys",
    status: "training",
    desc: "طالب ضمن المسار الأكاديمي القانوني."
  },


  // المناصب القانونية

  {
    name: "Judge",
    ar: "Judge",
    section: "Legal Positions",
    status: "active",
    desc: "يتولى الفصل في الدعاوى وإصدار الأحكام."
  },

  {
    name: "Prosecutor",
    ar: "Prosecutor",
    section: "Legal Positions",
    status: "active",
    desc: "يمثل الادعاء ويتولى إجراءات الاتهام."
  },

  {
    name: "Legal Consultant",
    ar: "Legal Consultant",
    section: "Legal Positions",
    status: "active",
    desc: "يقدم الاستشارات والآراء القانونية."
  },

  {
    name: "Client",
    ar: "Client",
    section: "Legal Positions",
    status: "active",
    desc: "طرف يستفيد من الخدمات والتمثيل القانوني."
  },


 // Justice Academy — Academic Affairs

{
  person: "HILYEL AL-Shehri",
  rank: "Director of Affairs",
  ar: "مدير الشؤون",
  section: "Justice Academy — Academic Affairs",
  status: "official",
  desc: "المسؤول عن إدارة الشؤون الأكاديمية."
},

{
  person: " لا يوجد ",
  rank: "Affairs Supervisor",
  ar: "مشرف الشؤون",
  section: "Justice Academy — Academic Affairs",
  status: "official",
  desc: "يشرف على فريق الشؤون ويتابع الإجراءات."
},

{
  person: " لا يوجد ",
  rank: "Student Affairs Officer",
  ar: "مسؤول شؤون الطلاب",
  section: "Justice Academy — Academic Affairs",
  status: "active",
  desc: "متابعة شؤون الطلاب واحتياجاتهم."
},

{
  person: " لا يوجد ",
  rank: "Admissions Officer",
  ar: "مسؤول القبول",
  section: "Justice Academy — Academic Affairs",
  status: "active",
  desc: "إدارة القبول والتسجيل ومراجعة الطلبات."
},

{
  person: "Mansour Al-Shiekh",
  rank: "Records Officer",
  ar: "مسؤول السجلات",
  section: "Justice Academy — Academic Affairs",
  status: "active",
  desc: "إدارة وحفظ وتحديث السجلات الرسمية."
},


// Justice Academy — Training

{
  person: "Mansour Al-Shiekh",
  rank: "Director of Training",
  ar: "مدير التدريب",
  section: "Justice Academy — Training",
  status: "official",
  desc: "المسؤول الأعلى عن برامج التدريب."
},

{
  person: " لا يوجد ",
  rank: "Training Supervisor",
  ar: "مشرف التدريب",
  section: "Justice Academy — Training",
  status: "official",
  desc: "الإشراف على المدربين والبرامج التدريبية."
},

{
  person: " لا يوجد ",
  rank: "Senior Instructor",
  ar: "مدرب أول",
  section: "Justice Academy — Training",
  status: "active",
  desc: "مدرب ذو خبرة وبرامج متقدمة."
},

{
  person: " لا يوجد ",
  rank: "Legal Instructor",
  ar: "مدرب قانوني",
  section: "Justice Academy — Training",
  status: "active",
  desc: "تقديم التدريب القانوني النظري والتطبيقي."
},

{
  person: " HILYEL AL-Shehri ",
  rank: "Assistant Instructor",
  ar: "مساعد مدرب",
  section: "Justice Academy — Training",
  status: "active",
  desc: "مساعدة المدربين في تنفيذ البرامج."
}
];


/* ========================================================
   المنسوبين
========================================================

   هنا أهم جزء.

تحديد الأسامي والرتب

   مثال:

   {
      name: "Ahmed",
      rank: "Judge"
   }

  

======================================================== */

const members = [
  {
    name: "Shamlan Alshamlan",
    rank: "Chief of DOJ"
  },
  {
    name: "Osama Al-Shiekh",
    rank: "Deputy Chief of DOJ"
  },

  {
    name: "Lorans Smith",
    rank: "Attorney General"
  },
   
   {
    name: "Mnasour Al-shiekh",
    rank: "Judge"
  },


  {
    name: "Hilyel Al-shehri",
    rank: "Judge"
  },

 {
    name: "Albert bradley",
    rank: "Judge"
  },

    {
    name: "Bruce Wilson",
    rank: "Prosecutor"
  },
   
  {
    name: "FEDERAL BLACK",
    rank: "Prosecutor"
  },

    {
    name: "Frank Capio",
    rank: "Prosecutor"
  },


   {
    name: "Victor Bradly",
    rank: "Prosecutor"
  },




 {
    name: "Harvey Sperter",
    rank: "Junior Attorney"
  },
   
  {
    name: "Preston Bradley",
    rank: "Junior Attorney"
  },


   


  {
    name: "Abu Shereen",
    rank: "Trainee Attorney"
  },

    {
    name: "Adrian Cole",
    rank: "Trainee Attorney"
  },
   
  {
    name: "MARKO ALSHMMARI",
    rank: "Trainee Attorney"
  },
   
  {
    name: "Lyloozy Al-Anazi",
    rank: "Trainee Attorney"
  },

  {
    name: "Yaroslav James",
    rank: "Trainee Attorney"
  },

 {
    name: "Adrian Cole",
    rank: "Trainee Attorney"
  },

 {
    name: "Mohammed Al-harbi",
    rank: "Trainee Attorney"
  },

    {
    name: "Morph Qeez",
    rank: "Trainee Attorney"
  },

    {
    name: "Sayaf Al-juhani",
    rank: "Trainee Attorney"
  },


  {
    name: "Fares Al-Fares",
    rank: "Trainee Attorney"
  }, 
    
   {
    name: "Leo Bradly",
    rank: "Trainee Attorney"
  },

     {
    name: "Fahad Almutairi",
    rank: "Trainee Attorney"
  }, 



  /*  {
    name: "",
    rank: "Trainee Attorney"
  },


    {
    name: "",
    rank: "Trainee Attorney"
  },*/

  
];


/* ========================================================
   تجهيز بيانات المنسوبين
======================================================== */

let nextId = 1;

const personnel = members.map(member => {

  const rankData = ranks.find(
    rank => rank.name === member.rank
  );

  return {

    id: nextId++,

    name: member.name,

    rank: member.rank,

    arRank: rankData
      ? rankData.ar
      : member.rank,

    section: rankData
      ? rankData.section
      : "غير محدد",

    status: rankData
      ? rankData.status
      : "active",

    desc: rankData
      ? rankData.desc
      : "لا يوجد وصف لهذا المنصب."

  };

});


/* ========================================================
   اختصارات بسيطة
======================================================== */

const $ = selector =>
  document.querySelector(selector);

const $$ = selector =>
  [...document.querySelectorAll(selector)];


/* ========================================================
   التنقل بين صفحات الموقع
======================================================== */

function showPage(id){

  $$(".page").forEach(page => {

    page.classList.remove("active");

  });


  const target =
    document.getElementById(id);


  if(target){

    target.classList.add("active");

  }


  $$(".links a").forEach(link => {

    link.classList.toggle(
      "active",
      link.dataset.page === id
    );

  });


  window.scrollTo({

    top: 0,

    behavior: "smooth"

  });


  location.hash = id;

}


window.showPage = showPage;


$$("[data-page]").forEach(element => {

  element.addEventListener(
    "click",
    event => {

      event.preventDefault();

      showPage(
        element.dataset.page
      );

    }
  );

});


/* ========================================================
   الجزيئات بالخلفية
======================================================== */

function createParticles(){

  const container =
    $("#particles-js");


  if(!container) return;


  for(let i = 0; i < 48; i++){

    const particle =
      document.createElement("span");


    particle.className =
      "particle";


    particle.style.left =
      `${Math.random() * 100}%`;


    particle.style.top =
      `${75 + Math.random() * 40}%`;


    particle.style.animationDuration =
      `${9 + Math.random() * 15}s`;


    particle.style.animationDelay =
      `${-Math.random() * 18}s`;


    container.appendChild(
      particle
    );

  }

}


/* ========================================================
   الإحصائيات
======================================================== */

function renderStats(){
  const scope = document.querySelector(".directory-tab.active")?.dataset.scope || "ministry";
  const academy = scope === "academy";
  const pool = personnel.filter(member => {
    const isAcademy = member.section && member.section.startsWith("Justice Academy");
    return academy ? isAcademy : !isAcademy;
  });

  const official = pool.filter(x => x.status === "official").length;
  const active = pool.filter(x => x.status === "active").length;
  const training = pool.filter(x => x.status === "training").length;
  const rankCount = new Set(pool.map(x => x.rank)).size;

  if($("#heroTotal")) $("#heroTotal").textContent = personnel.length;
  if($("#heroRanks")) $("#heroRanks").textContent = ranks.length;

  if($("#stats")){
    $("#stats").innerHTML = `
      <div class="stat"><b>${pool.length}</b><span>${academy ? "إجمالي منسوبي الأكاديمية" : "إجمالي منسوبي الوزارة"}</span></div>
      <div class="stat"><b>${rankCount}</b><span>رتبة ومنصب ضمن القسم</span></div>
      <div class="stat"><b>${official}</b><span>قيادات ومسؤولون</span></div>
      <div class="stat"><b>${active + training}</b><span>كوادر وطلاب ومتدربون</span></div>
    `;
  }
}

/* ========================================================
   تعبئة الفلاتر
======================================================== */

function fillFilters(){
  const departmentFilter = $("#departmentFilter");
  const rankFilter = $("#rankFilter");
  if(!departmentFilter || !rankFilter) return;

  const scope = document.querySelector(".directory-tab.active")?.dataset.scope || "ministry";
  const academy = scope === "academy";
  const pool = personnel.filter(member => {
    const isAcademy = member.section && member.section.startsWith("Justice Academy");
    return academy ? isAcademy : !isAcademy;
  });

  const currentDepartment = departmentFilter.value;
  const currentRank = rankFilter.value;

  departmentFilter.innerHTML = `<option value="all">${academy ? "جميع أقسام الأكاديمية" : "جميع قطاعات الوزارة"}</option>`;
  rankFilter.innerHTML = `<option value="all">جميع الرتب والمناصب</option>`;

  [...new Set(pool.map(member => member.section))].forEach(section => {
    const option = document.createElement("option");
    option.value = section;
    option.textContent = section
      .replace("Justice Academy — Academic Affairs","الأكاديمية — الشؤون الأكاديمية")
      .replace("Justice Academy — Training","الأكاديمية — قسم التدريب")
      .replace("Justice Department","وزارة العدل")
      .replace("Attorneys","هيئة المحامين")
      .replace("Legal Positions","المناصب القانونية");
    departmentFilter.appendChild(option);
  });

  [...new Map(pool.map(member => [member.rank, member.arRank])).entries()].forEach(([name, ar]) => {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = `${ar} — ${name}`;
    rankFilter.appendChild(option);
  });

  if([...departmentFilter.options].some(o=>o.value===currentDepartment)) departmentFilter.value=currentDepartment;
  if([...rankFilter.options].some(o=>o.value===currentRank)) rankFilter.value=currentRank;
}

/* ========================================================
   أسماء الحالات
======================================================== */

function statusLabel(status){

  if(status === "official"){

    return "قيادي";

  }


  if(status === "training"){

    return "تحت التدريب";

  }


  return "على رأس العمل";

}


/* ========================================================
   الحروف اللي تطلع داخل صورة الشخص
======================================================== */

function initials(name){

  return name

    .split(" ")

    .filter(Boolean)

    .slice(0, 2)

    .map(letter => letter[0])

    .join("")

    .toUpperCase();

}


/* ========================================================
   جدول المنسوبيـن
========================================================

   الجدول فيه فقط:

   الرقم
   المنسوب
   الرتبة
   الاختصاص
   الحالة

======================================================== */

function renderPersonnel(){
  const searchInput = $("#searchInput");
  const departmentFilter = $("#departmentFilter");
  const rankFilter = $("#rankFilter");
  const statusFilter = $("#statusFilter");
  const personnelBody = $("#personnelBody");
  const resultCount = $("#resultCount");
  const emptyState = $("#emptyState");
  const scope = document.querySelector(".directory-tab.active")?.dataset.scope || "ministry";

  if(!personnelBody) return;

  const search = searchInput ? searchInput.value.trim().toLowerCase() : "";
  const department = departmentFilter ? departmentFilter.value : "all";
  const rank = rankFilter ? rankFilter.value : "all";
  const status = statusFilter ? statusFilter.value : "all";

  const filtered = personnel.filter(member => {
    const isAcademy = member.section && member.section.startsWith("Justice Academy");
    const inScope = scope === "academy" ? isAcademy : !isAcademy;
    const searchable = `${member.id} ${member.name} ${member.rank} ${member.arRank} ${member.section} ${member.desc}`.toLowerCase();

    return inScope &&
      (!search || searchable.includes(search)) &&
      (department === "all" || member.section === department) &&
      (rank === "all" || member.rank === rank) &&
      (status === "all" || member.status === status);
  });

  if(resultCount) resultCount.textContent = `${filtered.length} سجل`;

  if(filtered.length === 0){
    personnelBody.innerHTML = "";
    if(emptyState) emptyState.hidden = false;
    return;
  }
  if(emptyState) emptyState.hidden = true;

  personnelBody.innerHTML = filtered.map(member => `
    <tr>
      <td class="id"><span class="person-id">${String(member.id).padStart(3,"0")}</span></td>
      <td>
        <div class="member">
          <div class="avatar">${initials(member.name)}</div>
          <div>
            <strong>${member.name}</strong>
            <small>JUSTICE-${String(member.id).padStart(4,"0")}</small>
          </div>
        </div>
      </td>
      <td><span class="rank">${member.rank}</span><small class="rank-ar">${member.arRank}</small></td>
      <td><div class="position">${member.desc}</div></td>
      <td><span class="status ${member.status}"><i></i>${statusLabel(member.status)}</span></td>
    </tr>
  `).join("");
}

function updateDirectoryScope(scope){
  document.querySelectorAll(".directory-tab").forEach(tab => {
    tab.classList.toggle("active", tab.dataset.scope === scope);
  });

  const title = $("#directoryTitle");
  const subtitle = $("#directorySubtitle");
  const academy = scope === "academy";

  if(title) title.textContent = academy ? "سجل منسوبي أكاديمية العدل" : "سجل منسوبي وزارة العدل";
  if(subtitle) subtitle.textContent = academy
    ? "الهيئة الأكاديمية والتدريبية وشؤون الطلاب داخل أكاديمية العدل."
    : "القيادات والمحامون والمناصب القانونية والكوادر التابعة لوزارة العدل.";

  fillFilters();
  renderStats();
  renderPersonnel();
}

document.querySelectorAll(".directory-tab").forEach(tab => {
  tab.addEventListener("click", () => updateDirectoryScope(tab.dataset.scope));
});

/* ========================================================
   القيادات
======================================================== */

function renderLeadership(){

  // تنضاف تلقائي بعد كل اضافه لا تعدلو شي فيها
  
  const leadership = ranks.filter(
    rank => rank.status === "official" && rank.name
  );

  const grid = $("#leadershipGrid");

  if(!grid) return;

  grid.innerHTML = leadership.map((rank, index) => `
    <article class="leader-card">
      <div class="leader-top">
        <div class="leader-icon">⚖</div>
        <div>
          <small>COMMAND ${String(index + 1).padStart(2, "0")}</small>
          <h3>${rank.name}</h3>
        </div>
      </div>
      <p>
        ${rank.ar} — ${rank.desc}
      </p>
    </article>
  `).join("");

}


/* ========================================================
   الأكاديمية
======================================================== */

function renderAcademy(){

  const affairs =
    ranks.filter(
      rank =>
        rank.section ===
        "Justice Academy — Academic Affairs"
    );


  const training =
    ranks.filter(
      rank =>
        rank.section ===
        "Justice Academy — Training"
    );


  const makeList =
    (items, target) => {

      const element =
        $(target);


      if(!element) return;


      element.innerHTML =

        items.map(rank => `

       <div class="rank-item">
  <div class="academy-person">
    <strong>${rank.person}</strong>
    <span>${rank.rank}</span>
  </div>

  <em>${rank.ar}</em>
</div>

        `).join("");

    };


  makeList(
    affairs,
    "#affairsRanks"
  );


  makeList(
    training,
    "#trainingRanks"
  );

}


/* ========================================================
   المناصب القانونية
======================================================== */

function renderLegal(){

  const legal =
    ranks.filter(
      rank =>
        rank.section ===
        "Legal Positions"
    );


  const grid =
    $("#legalGrid");


  if(!grid) return;


  grid.innerHTML =

    legal.map(rank => `

      <article class="legal-card">

        <div class="legal-icon">
          ⚖
        </div>


        <h3>

          ${rank.name}

        </h3>


        <p>

          ${rank.ar}
          —
          ${rank.desc}

        </p>


        <b>

          منصب قانوني

        </b>

      </article>

    `).join("");

}


/* ========================================================
   البحث والفلاتر
======================================================== */

[
  "searchInput",
  "departmentFilter",
  "rankFilter",
  "statusFilter"

].forEach(id => {

  const element =
    document.getElementById(id);


  if(!element) return;


  element.addEventListener(
    "input",
    renderPersonnel
  );


  element.addEventListener(
    "change",
    renderPersonnel
  );

});


/* ========================================================
   الطباعة
======================================================== */

const printBtn =
  $("#printBtn");


if(printBtn){

  printBtn.addEventListener(
    "click",
    () => window.print()
  );

}


/* ========================================================
   الوضع الليلي / النهاري
======================================================== */

const savedTheme =
  localStorage.getItem(
    "justice-theme"
  );


if(savedTheme === "light"){

  document.body.classList.add(
    "light"
  );

}


const themeBtn =
  $("#themeBtn");


if(themeBtn){

  themeBtn.addEventListener(
    "click",
    () => {

      document.body.classList.toggle(
        "light"
      );


      localStorage.setItem(

        "justice-theme",

        document.body.classList.contains(
          "light"
        )
          ? "light"
          : "dark"

      );

    }
  );

}


/* ========================================================
   تشغيل الموقع
======================================================== */

createParticles();

fillFilters();

renderStats();

renderLeadership();

renderAcademy();

renderLegal();

renderPersonnel();


/* ========================================================
   الصفحة اللي يفتح عليها الموقع
======================================================== */

const initialPage =
  location.hash.replace("#", "");


if(
  initialPage &&
  document.getElementById(initialPage)
){

  showPage(initialPage);

}
else{

  showPage("home");

}
