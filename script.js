/* ===== داده‌های سایت ===== */
const icons = {
  gavel: '<path d="M14 13 3 24M9 8l7 7M13 4l7 7M16.5 1.5 22.5 7.5M11.5 6.5 17.5 12.5"/>',
  scale: '<path d="M12 3v18M7 21h10M5 7h14M5 7l-3 6a3 3 0 0 0 6 0L5 7Zm14 0-3 6a3 3 0 0 0 6 0l-3-6Z"/>',
  users: '<circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0 1 14 0M17 4.5a4 4 0 0 1 0 7M18 21h4a6 6 0 0 0-4-5.6"/>',
  home: '<path d="m3 10 9-7 9 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/><path d="M9 22V12h6v10"/>',
  building: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h2M14 6h2M8 10h2M14 10h2M8 14h2M14 14h2M10 22v-4h4v4"/>',
  shield: '<path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5Z"/><path d="m9 12 2 2 4-4"/>',
  check: '<circle cx="12" cy="12" r="10"/><path d="m8 12 3 3 5-6"/>',
};

const services = [
  { icon: 'gavel', title: 'دعاوی کیفری', description: 'دفاع تخصصی در پرونده‌های کیفری، طرح شکایت، و پیگیری مراحل قضایی با دقت و سرعت.' },
  { icon: 'scale', title: 'دعاوی حقوقی', description: 'مشاوره و پیگیری دعاوی حقوقی شامل مطالبه وجه، الزام به انجام تعهد، و خسارات قراردادی.' },
  { icon: 'users', title: 'دعاوی خانواده', description: 'رسیدگی به امور خانواده شامل طلاق، حضانت، مهریه، نفقه، و توافقات قبل از ازدواج.' },
  { icon: 'home', title: 'دعاوی ملکی', description: 'مشاوره در امور ملکی: اجاره، خلع ید، تصرف عدوانی، و تنظیم قراردادهای ملکی.' },
  { icon: 'building', title: 'حقوق شرکت‌ها', description: 'مشاوره حقوقی به شرکت‌ها و استارتاپ‌ها: ثبت، قراردادها، مالکیت فکری، و حل اختلافات.' },
  { icon: 'shield', title: 'مشاوره پیشگیرانه', description: 'بررسی و تنظیم قراردادها و اسناد حقوقی برای پیشگیری از اختلافات آینده.' },
];

const stats = [
  { value: '۱۰+', label: 'سال تجربه وکالت' },
  { value: '۵۰۰+', label: 'پرونده موفق' },
  { value: '۹۸٪', label: 'رضایت مشتریان' },
  { value: '۲۴/۷', label: 'مشاوره آنلاین' },
];

const whyUs = [
  { title: 'مشاوره دقیق و شخصی‌سازی‌شده', text: 'تحلیل دقیق شرایط هر پرونده و ارائه راه‌حل متناسب با نیاز شما' },
  { title: 'پیگیری مستمر پرونده‌ها', text: 'اطلاع‌رسانی منظم درباره روند پرونده و پاسخ سریع به سوالات' },
  { title: 'حفظ محرمانگی کامل اطلاعات', text: 'حفظ اسرار و اطلاعات موکلان با بالاترین استاندارد اخلاقی' },
  { title: 'شفافیت در هزینه‌ها و فرآیند', text: 'توضیح کامل هزینه‌ها و مراحل پرونده قبل از هر اقدام' },
];

const svg = (path, cls = 'icon') => `<svg viewBox="0 0 24 24" class="${cls}">${path}</svg>`;

/* ===== رندر بخش‌ها ===== */
document.getElementById('servicesGrid').innerHTML = services.map((s) => `
  <div class="perspective">
    <article class="preserve-3d service-card">
      <div class="service-icon">${svg(icons[s.icon])}</div>
      <h3>${s.title}</h3>
      <p>${s.description}</p>
    </article>
  </div>`).join('');

document.getElementById('statsGrid').innerHTML = stats.map((s) => `
  <div class="stat-box"><div class="v">${s.value}</div><div class="l">${s.label}</div></div>`).join('');

document.getElementById('whyGrid').innerHTML = whyUs.map((w) => `
  <div class="perspective">
    <div class="preserve-3d why-card">
      <span class="why-badge">${svg(icons.check)}</span>
      <div><h3>${w.title}</h3><p>${w.text}</p></div>
    </div>
  </div>`).join('');

/* ===== منوی موبایل ===== */
const nav = document.querySelector('.main-nav');
document.getElementById('navToggle').addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => nav.classList.remove('open')));

/* ===== اثر سه‌بعدی هنگام حرکت ماوس روی کارت‌ها ===== */
document.querySelectorAll('.service-card, .why-card').forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `translateY(-8px) translateZ(30px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg)`;
  });
  card.addEventListener('mouseleave', () => { card.style.transform = ''; });
});

/* ===== فرم تماس ===== */
const form = document.getElementById('contactForm');
const alertBox = document.getElementById('formAlert');
const submitBtn = document.getElementById('submitBtn');

// آدرس بک‌اند خود را اینجا بگذارید (مثلاً یک API یا سرویس فرم).
// اگر خالی باشد، پیام‌ها فقط در مرورگر ذخیره می‌شوند.
const ENDPOINT = '';

function showAlert(type, msg) {
  alertBox.hidden = false;
  alertBox.className = 'alert ' + type;
  alertBox.textContent = msg;
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());

  if (!data.name || data.name.trim().length < 2) return showAlert('error', 'نام باید حداقل ۲ حرف باشد.');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email || '')) return showAlert('error', 'ایمیل معتبر نیست.');
  if (!data.message || data.message.trim().length < 10) return showAlert('error', 'پیام باید حداقل ۱۰ حرف باشد.');

  submitBtn.disabled = true;
  submitBtn.textContent = 'در حال ارسال...';

  try {
    if (ENDPOINT) {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('ارسال ناموفق بود');
    } else {
      const saved = JSON.parse(localStorage.getItem('contact_submissions') || '[]');
      saved.push({ ...data, created_at: new Date().toISOString() });
      localStorage.setItem('contact_submissions', JSON.stringify(saved));
    }
    showAlert('success', 'پیام شما با موفقیت ارسال شد. به زودی با شما تماس خواهم گرفت.');
    form.reset();
  } catch (err) {
    showAlert('error', 'خطا در ارسال فرم. لطفاً دوباره تلاش کنید.');
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = 'ارسال درخواست مشاوره';
  }
});
