const quotes = [
  "قال رسول الله ﷺ: خَيرُكُم مَن تعلَّمَ القرآنَ وعلَّمَهُ",
  "قال رسول الله ﷺ: استعن بالله ولا تعجز، وإن أصابك شيء فلا تقل لو اني فعلت كذا وكذا، ولكن قل قدر الله وما شاء فعل، فإن لو تفتح عمل الشيطان.",
  "قال رسول الله ﷺ: من لا يشكر الناس لا يشكر الله",
  "قال رسول الله ﷺ: المسلم من سلم المسلمون من لسانه ويده",
  "قال رسول الله ﷺ: اتق الله حيثما كنت وأتبع السيئة الحسنة تمحها وخالق الناس بخلق حسن",
  "قال رسول الله ﷺ: كلمتان خفيفتان على اللسان ثقيلتان في الميزان حبيبتان إلى الرحمن سبحان الله وبحمده سبحان الله العظيم",
  "قال رسول الله ﷺ: من صلى علي صلاة واحدة صلى الله عليه عشر صلوات وحطت عنه عشر خطيئات ورفعت له عشر درجات",
  "قال رسول الله ﷺ: المؤمن للمؤمن كالبنيان يشد بعضه بعضا",
  "قال رسول الله ﷺ: إن في الجسد مضغة إذا صلحت صلح الجسد كله وإذا فسدت فسد الجسد كله ألا وهي القلب",
  "قال رسول الله ﷺ: يسر ولا تعسر وبشر ولا تنفر",
  "قال رسول الله ﷺ: من كان يؤمن بالله واليوم الآخر فليكرم ضيفه",
  "قال رسول الله ﷺ: إياكم والظن فإن الظن أكذب الحديث",
  "قال رسول الله ﷺ: من صام رمضان إيمانا واحتسابا غفر له ما تقدم من ذنبه، ومن قام ليلة القدر إيمانا واحتسابا غفر له ما تقدم من ذنبه",
  "قال رسول الله ﷺ: الرحم معلقة بالعرش تقول من وصلني وصله الله ومن قطعني قطعه الله",
  "قال رسول الله ﷺ: من سلك طريقا يلتمس فيه علما سهل الله له به طريقا الى الجنة",
  "قال رسول الله ﷺ: آية المنافق ثلاث إذا حدث كذب وإذا وعد أخلف وإذا اؤتمن خان",
  "قال رسول الله ﷺ: لا يؤمن أحدكم حتى يحب لأخيه ما يحب لنفسه",
  "قال رسول الله ﷺ: سباب المسلم فسوق وقتاله كفر",
  "قال رسول الله ﷺ: من كذب علي متعمدا فليتبوأ مقعده من النار",
  "قال رسول الله ﷺ: إذا مات الإنسان انقطع عمله إلا من ثلاث صدقة جارية أو علم ينتفع به أو ولد صالح يدعو له",
  "قال رسول الله ﷺ: مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلَا يُؤْذِ جَارَهُ، وَمَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيُكْرِمْ ضَيْفَهُ، وَمَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ",
  "قال رسول الله ﷺ: ما من شيء أثقل في ميزان المؤمن يوم القيامة من حسن الخلق",
  "قال رسول الله ﷺ: من قال سبحان الله العظيم وبحمده غرست له نخلة في الجنة",
  "قال رسول الله ﷺ: ما جلس قوم مجلسا لم يذكروا الله فيه إلا كان عليهم ترة",
  "قال رسول الله ﷺ: لا يسم الرجل على سوم أخيه ولا يخطب على خطبة أخيه",
  "قال رسول الله ﷺ: تنكح النساء لأربع لمالها وجمالها وحسبها ودينها فاظفر بذات الدين تربت يداك",
  "قال رسول الله ﷺ: لمرأة كالضلع فإن تحرص على إقامته تكسره وإن تتركه تستمتع به وفيه عوج",
  "قال رسول الله ﷺ: ما تقوم الساعة حتى يقبض العلم ويظهر الجهل ويكثر الهرج قيل وما الهرج قال القتل",
  "قال رسول الله ﷺ: لا تساب وأنت صائم وإن سبك إنسان فقل إني صائم",
];

const challenges = [
  "صل الضحى اليوم (4 ركعات)",
  "اقرأ صفحة قران بعد كل صلاة اليوم",
  "قم بقراءة سورة الكهف",
  "صلي صلاة التراويح اليوم (من المسجد او من البيت)",
  "استغفر الله اليوم 100 مرة قبل النوم",
  "اقراء سورة يس اليوم",
  "قل أذكار الصباح كاملة بعد صلاة الفجر",
  "تصدق بمبلغ بسيط على محتاج أو صندوق خير",
  "أرسل رسالة تشجيع دينية لصديق أو قريب لم تكلمه منذ فترة",
  "ساعد أحد أفراد الأسرة في عمل منزلي بنية التقرب لله",
  "قل سبحان الله وبحمده 100 مرة خلال اليوم",
  "ادعُ لوالديك بالمغفرة والرحمة 7 مرات بعد صلاة",
  "صلّ سنة الصلوات المفروضة",
  "أطعم طيراً أو قطة أو حيواناً بنية الصدقة",
  "قل أذكار المساء كاملة قبل النوم",
  "صلّ صلاة قيام الليل ركعتين",
  "احرص على عدم رفع الصوت أو الغضب اليوم",
  "تصدق بطعام لصائم آخر",
  "اقرأ سورة الإخلاص + الفلق + الناس 10 مرات بعد المغرب",
  "قل اللهم إنك عفو تحب العفو فاعفُ عني 100 مرة",
  "تجنب استخدام الهاتف أو الشاشات لمدة ساعة بعد العشاء، واستبدلها بذكر أو قراءة قرآن",
  "ابحث عن آية قرآنية تتحدث عن الرحمة أو المغفرة، اقرأ تفسيرها البسيط، وادعُ بها",
  "شارك حديث من احاديث الرسول ﷺ لصديق قريب لك",
  "اقرأ سورة الحجرات اليوم",
  "قل لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير 100 مرة",
  "أعطِ كلمة طيبة أو مدح صادق لكل فرد في البيت اليوم",
  "صلِّ صلاة التهجد ركعة واحدة فقط إضافية",
  "أرسل دعاء مكتوباً لشخص تحبه ولم تذكره من زمان",
  "ادعُ الله بدعاء شخصي طويل بعد الإفطار مباشرة",
  "اقرأ سورة الملك قبل النوم",
];

const dailyQuote = document.getElementById("dailyQuote");
const shareTextBtn = document.getElementById("shareTextBtn");
const shareImageBtn = document.getElementById("shareImageBtn");
const quoteBox = document.getElementById("quoteBox");

const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");

const congratsModal = document.getElementById("congratsModal");
const downloadCongrats = document.getElementById("downloadCongrats");
const shareCongrats = document.getElementById("shareCongrats");

dailyQuote.textContent = quotes[Math.floor(Math.random() * quotes.length)];

shareTextBtn.onclick = () => {
  if (navigator.share) {
    navigator.share({ text: dailyQuote.textContent });
  }
};

async function captureHighQuality(element) {
  element.classList.add("share-mode");

  const canvas = await html2canvas(element, {
    scale: 3,
    useCORS: true,
    backgroundColor: null,
  });

  element.classList.remove("share-mode");
  return canvas;
}

shareImageBtn.onclick = async () => {
  const canvas = await captureHighQuality(quoteBox);

  canvas.toBlob((blob) => {
    const file = new File([blob], "quote.png", { type: "image/png" });

    if (navigator.share) {
      navigator.share({ files: [file] });
    } else {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "quote.png";
      link.click();
    }
  });
};

downloadCongrats.onclick = () => {
  const link = document.createElement("a");
  link.href = "assets/congrats.png";
  link.download = "congrats.png";
  link.click();
};

shareCongrats.onclick = async () => {
  const response = await fetch("assets/congrats.png");
  const blob = await response.blob();
  const file = new File([blob], "congrats.png", { type: "image/png" });

  if (navigator.share) {
    navigator.share({ files: [file] });
  } else {
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "congrats.png";
    link.click();
  }
};

const today = new Date().toISOString().slice(0, 10);
const completedTodayKey = "ramadan_completed_" + today;

let nextDayToUnlock = parseInt(localStorage.getItem("ramadan_next_day") || "1");

const calendar = document.getElementById("calendar");
const modal = document.getElementById("modal");
const challengeText = document.getElementById("challengeText");
const completeBtn = document.getElementById("completeBtn");

let selectedDay = null;

for (let i = 1; i <= 30; i++) {
  const day = document.createElement("div");
  day.className = "day";
  day.textContent = "اليوم " + i;

  if (localStorage.getItem("day" + i)) {
    day.classList.add("completed");
  }

  day.onclick = () => openChallenge(i);
  calendar.appendChild(day);
}

function openChallenge(dayNumber) {
  const alreadyDoneToday = localStorage.getItem(completedTodayKey) === "true";

  if (dayNumber < nextDayToUnlock) {
    challengeText.textContent = "لقد أكملت هذا اليوم بالفعل";
    completeBtn.style.display = "none";
  } else if (dayNumber > nextDayToUnlock) {
    challengeText.textContent = "يجب إكمال اليوم السابق أولاً";
    completeBtn.style.display = "none";
  } else if (alreadyDoneToday) {
    challengeText.textContent =
      "لقد أكملت تحدي اليوم بالفعل\nغدًا يوم جديد إن شاء الله";
    completeBtn.style.display = "none";
  } else {
    selectedDay = dayNumber;
    challengeText.textContent = challenges[dayNumber - 1];
    completeBtn.style.display = "block";
  }

  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}

completeBtn.onclick = () => {
  localStorage.setItem("day" + selectedDay, "done");
  localStorage.setItem(completedTodayKey, "true");

  nextDayToUnlock = selectedDay + 1;
  localStorage.setItem("ramadan_next_day", nextDayToUnlock.toString());

  document.querySelectorAll(".day")[selectedDay - 1].classList.add("completed");
  updateProgress();
  closeModal();
};

function updateProgress() {
  let completed = 0;
  for (let i = 1; i <= 30; i++) {
    if (localStorage.getItem("day" + i)) completed++;
  }

  const percent = Math.round((completed / 30) * 100);
  progressBar.style.width = percent + "%";
  progressText.textContent = `نسبة الإنجاز: ${percent}%`;

  if (percent === 100) {
    congratsModal.style.display = "flex";
  }
}

updateProgress();

function closeCongrats() {
  congratsModal.style.display = "none";
}

const starCanvas = document.getElementById("stars");
const ctx = starCanvas.getContext("2d");

function resizeCanvas() {
  starCanvas.width = window.innerWidth;
  starCanvas.height = window.innerHeight;
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

const stars = Array.from({ length: 120 }, () => ({
  x: Math.random() * starCanvas.width,
  y: Math.random() * starCanvas.height,
  r: Math.random() * 1.5 + 0.5,
  speed: Math.random() * 0.3 + 0.1
}));

function animateStars() {
  ctx.clearRect(0, 0, starCanvas.width, starCanvas.height);
  ctx.fillStyle = "white";

  stars.forEach(s => {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
    s.y += s.speed;
    if (s.y > starCanvas.height) {
      s.y = 0;
      s.x = Math.random() * starCanvas.width;
    }
  });

  requestAnimationFrame(animateStars);
}

animateStars();
