// التحكم في شاشة التحميل الرائعة (Loader Percentage Loop)
/* انتهاء الـ Loader تدريجياً وتحديث النسبة المئوية */
window.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const loaderBar = document.getElementById('loaderBar');
    const loaderPercentage = document.getElementById('loaderPercentage');
    
    let count = 0;
    const interval = setInterval(() => {
        count += 2;
        loaderBar.style.width = count + '%';
        loaderPercentage.innerText = count + '%';
        
        if(count >= 100) {
            clearInterval(interval);
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.visibility = 'hidden';
            }, 600);
        }
    }, 20);
});

// تفعيل تأثير حركة المؤشر المتطور (Custom Glow Cursor Effect)
/* تتبع الفأرة لإعطاء شعور هولوجرامي فخم */
const cursor = document.querySelector('.custom-cursor');
const cursorBlur = document.querySelector('.cursor-blur');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    cursorBlur.style.left = e.clientX + 'px';
    cursorBlur.style.top = e.clientY + 'px';
});

// تأثير الكتابة الآلية الاحترافي في واجهة البطل (Typing Effect)
/* يقوم بكتابة أهداف حنين بطريقة شيقة */
const phrases = ["تغيير المستقبل.", "الابتكار الرقمي.", "التميز الأكاديمي."];
let i = 0;
let timer;

function typingEffect() {
    let word = phrases[i].split("");
    var loopTyping = function() {
        if (word.length > 0) {
            document.querySelector('.typing-text').innerHTML += word.shift();
        } else {
            setTimeout(deletingEffect, 2000);
            return false;
        }
        timer = setTimeout(loopTyping, 100);
    };
    loopTyping();
}

function deletingEffect() {
    let word = phrases[i].split("");
    var loopDeleting = function() {
        if (word.length > 0) {
            word.pop();
            document.querySelector('.typing-text').innerHTML = word.join("");
        } else {
            if (phrases.length > (i + 1)) {
                i++;
            } else {
                i = 0;
            }
            setTimeout(typingEffect, 500);
            return false;
        }
        timer = setTimeout(loopDeleting, 60);
    };
    loopDeleting();
}
typingEffect();

// شريط تقدم التمرير العلوى المتجاوب (Scroll Progress Bar)
/* يظهر للمستخدم كم تصفح من ملفك الشخصي */
window.addEventListener('scroll', () => {
    const scrollProgress = document.getElementById('scrollProgress');
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (window.pageYOffset / totalHeight) * 100;
    scrollProgress.style.width = progress + '%';
    
    // إظهار زر العودة للأعلى
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (window.pageYOffset > 400) {
        backToTopBtn.style.display = "flex";
    } else {
        backToTopBtn.style.display = "none";
    }
});

// العودة للأعلى بسلاسة (Back to Top Trigger)
document.getElementById('backToTopBtn').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// عداد الأرقام التفاعلي عند الوصول لقسم الإحصائيات (Counter Animation)
/* يعمل العداد تلقائياً بمجرد ظهور العناصر على الشاشة */
const counters = document.querySelectorAll('.counter');
const speed = 50;

const startCounters = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 30);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
};

// استخدام Intersection Observer لمراقبة ظهور الأرقام والبدء في عدها
const observerOptions = { threshold: 0.5 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            startCounters();
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const statsSection = document.querySelector('.stats-bar-container');
if(statsSection) observer.observe(statsSection);

// التحكم في معرض الصور المنزلق (Gallery Slider / Carousel Control)
/* تمرير الصور الدائرية يميناً ويساراً بسلاسة */
const track = document.querySelector('.gallery-track');
const nextBtn = document.getElementById('galleryNext');
const prevBtn = document.getElementById('galleryPrev');
let scrollAmount = 0;

nextBtn.addEventListener('click', () => {
    if (scrollAmount < track.scrollWidth - track.clientWidth) {
        scrollAmount += 310;
        track.style.transform = `translateX(-${scrollAmount}px)`;
    }
});

prevBtn.addEventListener('click', () => {
    if (scrollAmount > 0) {
        scrollAmount -= 310;
        track.style.transform = `translateX(-${scrollAmount}px)`;
    }
});

// تفعيل ميزة نافذة معاينة الصور الكبيرة (Lightbox Modal Feature)
const lightbox = document.getElementById('lightboxModal');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');

document.querySelectorAll('.lightbox-trigger').forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = "block";
        lightboxImg.src = img.src;
        lightboxCaption.innerHTML = img.alt;
    });
});

document.getElementById('lightboxClose').addEventListener('click', () => {
    lightbox.style.display = "none";
});

// إغلاق اللايت بوكس عند الضغط خارج الصورة لحرية التصفح
lightbox.addEventListener('click', (e) => {
    if(e.target === lightbox) {
        lightbox.style.display = "none";
    }
});
// ==========================================
// التحكم في فتح وإغلاق قائمة الموبايل الذكية
// ==========================================

// ==========================================
// التحكم في فتح وإغلاق قائمة الموبايل الذكية
// ==========================================

const mobileMenuBtn = document.getElementById('mobile-menu');
const navLinksContainer = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a');

if (mobileMenuBtn && navLinksContainer) {
    // عند الضغط على زر القائمة
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        navLinksContainer.classList.toggle('active');
    });

    // إغلاق القائمة تلقائياً عند الضغط على أي رابط للانتقال السلس دون أخطاء برمجية
    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            navLinksContainer.classList.remove('active');
        });
    });
}
