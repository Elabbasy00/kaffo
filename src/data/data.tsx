import { BlogType } from "../types/data-type";

export const categoryes = [
  {
    ref: "market",
    url: "/services/market",
    name: "الـتـسـويـقـيـة",
    description:
      "مفتاح نجاح عملك! نقدم استراتيجيات تسويقية متقدمة، من تحليل السوق إلى إدارة الحملات الإعلانية. نسعى لتعزيز هويتك الرقمية وجذب جمهور مستهدف، مما يؤدي إلى زيادة الانتشار وتحقيق نتائج قوية. اعتمد على خبرتنا لرفع مستوى وجودك في السوق وتحقيق نمو مستدام لعملك.",
    image: "/service/market.png",
    effect: 1,
  },
  {
    ref: "learn",
    name: "الـتـعـلـيـمـيـة",
    url: "/education",
    description:
      "تقوم على بناء مستقبلك التعليمي والمهني. نقدم دورات متخصصة تشمل مجموعة واسعة من المواضيع، مصممة لتناسب احتياجاتك وتطوير مهاراتك. كما ان خدماتنا التعليمية المدرسية والجامعية تعكس التزامنا بتطوير مسار التعلم الخاص بك. نقدم دعماً شاملاً يشمل دروسًا تعليمية مخصصة، وموارد تعلم متقدمة لتعزيز فهمك. سواء كنت في المدرسة الثانوية أو الجامعة، نسعى لتوفير بيئة تعلم داعمة تساعدك على تحقيق أفضل أداء ممكن والنجاح في رحلتك الأكاديمية.",
    image: "/service/educ.png",
    effect: 2,
  },
  {
    ref: "coding",
    name: "الـبـرمـجـيـة",
    url: "/services/coding",
    description:
      "نوفر خدمات برمجية متقدمة يتضمن تحليل متقدم لاحتياجاتك، تصميم برمجي دقيق، وتنفيذ يعتمد على أحدث التقنيات. نقدم حلاً متكاملًا لاحتياجاتك البرمجية، سواء كنت تبحث عن تطوير تطبيقات مخصصة، أو تحسين مواقع الويب، أو حتى تنفيذ مشاريع برمجية معقدة. يتميز فريقنا بالخبرة العميقة والمهارات الفنية، حيث يسعى لتحقيق الأهداف الفريدة لعملك. سواء كنت شركة ناشئة تحتاج إلى تقنيات حديثة أو شركة كبيرة تسعى لتحسين أدائها البرمجي، نحن هنا لتقديم حلاً برمجيًا مبتكرًا يتجاوب مع احتياجاتك ويرفع مستوى وجودك الرقمي.",
    image: "/service/coding.png",
    effect: 3,
  },
];

export const services = [
  {
    name: "تصميم وبرمجة مواقع الويب",
    image: "/service/Programmer.png",
    id: 1,
    ref: "coding",
  },
  {
    name: "برمجة تطبيقات الجوال",
    image: "/service/Cross-platform.png",
    id: 2,
    ref: "coding",
  },
  {
    name: "حلول برمجية مخصصة",
    image: "/service/coding.png",
    id: 3,
    ref: "coding",
  },
  { name: "دعم تقني", image: "/service/educ.png", id: 4, ref: "coding" },
  {
    name: "تحسين وتطوير البرمجيات الحالية",
    image: "/service/educ.png",
    id: 5,
    ref: "coding",
  },

  { name: "حملات إعلانية", image: "/service/educ.png", id: 6, ref: "market" },
  {
    name: "صياغة وتحرير المحتوى",
    image: "/service/market.png",
    id: 7,
    ref: "market",
  },
  {
    name: "عمل هوية تجارية",
    image: "/service/Programmer.png",
    id: 8,
    ref: "market",
  },
  { name: "هوية بصرية", image: "/service/educ.png", id: 9, ref: "market" },
  {
    name: "تسويق رقمي",
    image: "/service/Cross-platform.png",
    id: 10,
    ref: "market",
  },

  {
    name: "دورات تدريبية برمجية وتسويقية",
    image: "/service/market.png",
    id: 11,
    ref: "learn",
  },
  {
    name: "كورسات دراسية للمدارس والجامعات",
    image: "/service/educ.png",
    id: 12,
    ref: "learn",
  },
  {
    name: "مشاريع التخرج والأبحاث",
    image: "/service/Programmer.png",
    id: 13,
    ref: "learn",
  },
  {
    name: "ورش عمل تعليمية",
    image: "/service/Cross-platform.png",
    id: 14,
    ref: "learn",
  },
];

export const client = [
  {
    name: "معهد طيبة",
    image: "/clients/Tiba.png",
  },
  {
    name: "جامعة الملك عبدالعزيز",
    image: "/clients/king_abd_elazez.png",
  },
  {
    name: "جامعة الملك عبدالله",
    image: "/clients/king_abdullah.png",
  },
  {
    name: "جامعة الملك فيصل",
    image: "/clients/king_fasil.png",
  },
  {
    name: "جامعة الملك سعود",
    image: "/clients/king_s3ood.png",
  },
  {
    name: "جامعة الملك خالد",
    image: "/clients/kink_khaled.png",
  },
  {
    name: "جامعة الاميرة نورة",
    image: "/clients/queen_nora.png",
  },
];

export const blogs: BlogType[] = [
  {
    overview: "كيفية تدير مبيعاتك بشكل احترافي",
    content: "",
    cover: "/blog/sales.png",
    id: "1",
    created_at: new Date().toLocaleDateString(),
    slug: "",
  },
  {
    overview: "الاهداف التسويقة",
    content: "",
    cover: "/blog/goals.jpg",
    id: "2",
    created_at: new Date().toLocaleDateString(),
    slug: "",
  },
  {
    overview: "كيف تصمم هوية بصرية",
    created_at: new Date().toLocaleDateString(),
    content: "",
    cover: "/blog/desgin.webp",
    id: "3",
    slug: "",
  },
  {
    overview: "ما هو Flutter",
    created_at: new Date().toLocaleDateString(),
    content: "",
    cover: "/blog/flutter-1.png",
    id: "4",
    slug: "",
  },
];

export const team = [
  {
    name: "د. مـحمـد جـمـال ",
    desc: "بكالوريوس الطب والجراحة العامة  - ماجستير الباطنة العامة والجهاز الهضمي",
    img: "/our-team/dr-mohamed.jpg",
    id: 1,
  },
  {
    name: "د. مـحـمـد ايـمـن",
    desc: "بكالريوس الطب و الجراحة",
    img: "/our-team/dr-ayman.jpg",
    id: 2,
  },
  {
    name: "د. احـمـد شـلـبـي",
    desc: "ماجستير الفيزياء و الالكترونيات",
    img: "/our-team/shalaby.jpg",
    id: 3,
  },
  {
    name: "د. مـحـمـود عـادل",
    desc: "دكتوراه الكيمياء العضوية",
    img: "/our-team/m-adel.jpg",
    id: 4,
  },
  {
    name: "د. اخـلاص شـلـبـي",
    desc: "ماجستير الكيمياء الغير عضوية",
    img: "/our-team/a5las.jpg",
    id: 5,
  },
  {
    name: "اسـلام مـحـمـد",
    desc: "ماجستير العلوم الزراعية",
    img: "/our-team/islam.jpg",
    id: 6,
  },
  {
    name: "أ.م.د مـحـمـد بـحـيـري",
    desc: "دكتوراه الذكاء الاصطناعي",
    img: "/our-team/mohamed-bheriy.jpg",
    id: 7,
  },

  {
    name: "د. عـبـد الـسـلام مـحـمـد",
    desc: "ماجستير فيزياء الجوامد",
    img: "/our-team/blank.jpg",
    id: 8,
  },

  {
    name: "د. نـصـيـف مـجـدي",
    desc: "ماجستير ميكانيكا حيوية",
    img: "/our-team/nasif.jpg",
    id: 9,
  },
  {
    name: "لؤي حـسـام عـبـدالحـمـيـد",
    desc: "بكالريوس الطب و الجراحه - الحالات الحرجة والرعاية المركزة",
    img: "/our-team/loay.jpg",
    id: 10,
  },
  {
    name: "مريم فاروق عبد اللطيف امين",
    desc: "ليسانس اداب وتربية - لغه إنجليزيه",
    img: "/our-team/mariam.jpg",
    id: 11,
  },
];
