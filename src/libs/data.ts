import Employee from "../components/AddEmployee";


export const governorates = [
  { id: 1, name: "عدن" },
  { id: 2, name: "صنعاء" },
  { id: 3, name: "تعز" },
  { id: 4, name: "حضرموت" },
  { id: 5, name: "إب" },
  { id: 6, name: "الحديدة" },
  { id: 7, name: "المحويت" },
  { id: 8, name: "الضالع" },
  { id: 9, name: "المهرة" },
  { id: 10, name: "ذمار" },
  { id: 11, name: "شبوة" },
  { id: 12, name: "حجة" },
  { id: 13, name: "لحج" },
  { id: 14, name: "أبين" },
  { id: 15, name: "صعدة" },
  { id: 16, name: "عمران" },
  { id: 17, name: "ريمة" },
  { id: 18, name: "الجوف" },
  { id: 19, name: "مأرب" },
  { id: 20, name: "البيضاء" },
];

// Branches (الفروع) - linked to governorates
export const branches = [
  // عدن
  {
    id: 1,
    name: "فرع عدن الرئيسي",
    governorate: "عدن",
    address: "شارع عبدالعزيز جوار شمسان مول",
    phone: "770011126",
  },
  {
    id: 2,
    name: "فرع الشيخ عثمان",
    governorate: "عدن",
    address: "جولة السيلة امام مسجد العيدروس",
    phone: "775666815",
  },
  {
    id: 3,
    name: "فرع المعلا",
    governorate: "عدن",
    address: "الشارع الرئيسي - جوار وكاله سامسونج",
    phone: "780500546",
  },
  {
    id: 4,
    name: "فرع الكراع",
    governorate: "عدن",
    address: "دار سعد- امام سوق الكراع",
    phone: "775848690",
  },
  {
    id: 5,
    name: "فرع الممدارة",
    governorate: "عدن",
    address: "الهناجر مجاور معرض الحرمين",
    phone: "781781506",
  },
  {
    id: 6,
    name: "فرع إنماء",
    governorate: "عدن",
    address: "انماء القديمة الشارع الرئيسي",
    phone: "775849617",
  },

  // صنعاء
  {
    id: 7,
    name: "فرع صنعاء الرئيسي - 22 مايو",
    governorate: "صنعاء",
    address: "شارع 22 مايو - امام محطة ركن مايو",
    phone: "774090385",
  },
  {
    id: 8,
    name: "فرع الستين",
    governorate: "صنعاء",
    address: "شارع الستين الشمالي جوار كلية الطب",
    phone: "779149225",
  },
  {
    id: 9,
    name: "فرع باب السلام",
    governorate: "صنعاء",
    address: "باب السلام امام قصر غمدان",
    phone: "774090388",
  },
  {
    id: 10,
    name: "فرع حدة",
    governorate: "صنعاء",
    address: "حدة امام فلافل الفلسطيني",
    phone: "776500152",
  },
  {
    id: 11,
    name: "فرع حزيز",
    governorate: "صنعاء",
    address: "حزيز امام محطة حاتم للمشتقات النفطية",
    phone: "776500151",
  },
  {
    id: 12,
    name: "فرع دارس",
    governorate: "صنعاء",
    address: "شارع المطار جوار بنك اليمن والكويت",
    phone: "776590162",
  },
  {
    id: 13,
    name: "فرع شميلة",
    governorate: "صنعاء",
    address: "شارع تعز جوار برج الفؤاد الطبي",
    phone: "774090389",
  },
  {
    id: 14,
    name: "فرع هائل",
    governorate: "صنعاء",
    address: "هايل تقاطع شارع الرقاص",
    phone: "774090390",
  },

  // تعز
  {
    id: 15,
    name: "فرع السمسرة",
    governorate: "تعز",
    address: "الشارع العام خط التربة تعز",
    phone: "783666305",
  },
  {
    id: 16,
    name: "فرع المخا",
    governorate: "تعز",
    address: "الشارع العام - امام الجامعة الماليزية",
    phone: "780500509",
  },
  {
    id: 17,
    name: "فرع البيرين",
    governorate: "تعز",
    address: "الشارع العام مقابل محطة السلام",
    phone: "783666304",
  },
  {
    id: 18,
    name: "فرع التربة",
    governorate: "تعز",
    address: "الشارع العام- مفرق القحفة",
    phone: "776400386",
  },
  {
    id: 19,
    name: "فرع السويداء",
    governorate: "تعز",
    address: "جوار محلات الصوفي للتجارة",
    phone: "779037570",
  },
  {
    id: 20,
    name: "فرع المركز - الشمايتين",
    governorate: "تعز",
    address: "الشارع العام - السوق - جوار بنك الكريمي",
    phone: "781781523",
  },
  {
    id: 21,
    name: "فرع النشمة",
    governorate: "تعز",
    address: "النشمة الدائري جوار بنك التضامن",
    phone: "776500125",
  },
  {
    id: 22,
    name: "فرع بير باشا",
    governorate: "تعز",
    address: "الشارع العام جوار ثلاجة المدينة",
    phone: "778066502",
  },
  {
    id: 23,
    name: "فرع شارع جمال",
    governorate: "تعز",
    address: "السوق المركزي - بجانب مختبرات التضامن",
    phone: "772820572",
  },
  {
    id: 24,
    name: "فرع مفرق ماوية",
    governorate: "تعز",
    address: "مفرق ماوية الشارع العام امام مطعم ريمان",
    phone: "774090359",
  },
  {
    id: 25,
    name: "فرع نجد قسيم",
    governorate: "تعز",
    address: "خط المسراخ امام مركز الراعي الطبي",
    phone: "778066501",
  },

  // حضرموت
  {
    id: 26,
    name: "فرع سيئون",
    governorate: "حضرموت",
    address: "شارع الجزائر- عمارة الكاف",
    phone: "779037223",
  },
  {
    id: 27,
    name: "فرع الكورنيش",
    governorate: "حضرموت",
    address: "الكورنيش حي السلام جوار البريد",
    phone: "776500161",
  },
  {
    id: 28,
    name: "فرع الشرج",
    governorate: "حضرموت",
    address: "امام الهايبر جوار مطعم مذاقي السياحي",
    phone: "776500161",
  },
  {
    id: 29,
    name: "فرع بويش",
    governorate: "حضرموت",
    address: "بويش الشارع العام",
    phone: "776400388",
  },
  {
    id: 30,
    name: "فرع فوة",
    governorate: "حضرموت",
    address: "المساكن الشارع العام صالة ليالي العمر",
    phone: "780013557",
  },

  // إب
  {
    id: 31,
    name: "فرع إب الرئيسي",
    governorate: "إب",
    address: "جولة العدين جوار فندق الشرق الأوسط",
    phone: "774090373",
  },
  {
    id: 32,
    name: "فرع الرضمة",
    governorate: "إب",
    address: "الشارع العام- أمام المجلس المحلي",
    phone: "776500153",
  },
  {
    id: 33,
    name: "فرع السبل",
    governorate: "إب",
    address: "شارع السبل امام قصر الضيافة",
    phone: "",
  },
  {
    id: 34,
    name: "فرع السدة",
    governorate: "إب",
    address: "السدة الشارع العام امام محلات حمود ناشر",
    phone: "774090375",
  },
  {
    id: 35,
    name: "فرع النادرة",
    governorate: "إب",
    address: "النادرة منطقة الميدان",
    phone: "",
  },
  {
    id: 36,
    name: "فرع شبان",
    governorate: "إب",
    address: "الشارع العام- جوار محلات البرطي للحديد",
    phone: "774090396",
  },
  {
    id: 37,
    name: "فرع طبيع",
    governorate: "إب",
    address: "طبيع الشارع العام جوار محلات عبدالاله المريسي",
    phone: "",
  },
  {
    id: 38,
    name: "فرع يريم 1",
    governorate: "إب",
    address: "الشارع العام امام مطعم الاندلس",
    phone: "774090376",
  },
  {
    id: 39,
    name: "فرع يريم 2",
    governorate: "إب",
    address: "الشارع العام- جولة جامع سند",
    phone: "774090372",
  },

  // الحديدة
  {
    id: 40,
    name: "فرع الحديدة",
    governorate: "الحديدة",
    address: "شارع النخيل - جوار باشنفر للملابس",
    phone: "776400387",
  },
  {
    id: 41,
    name: "فرع الجراحي",
    governorate: "الحديدة",
    address: "جوار حمود هاشم عطيف لقطع غيار السيارات",
    phone: "774090362",
  },
  {
    id: 42,
    name: "فرع باجل",
    governorate: "الحديدة",
    address: "الشارع العام - امام بنك الأمل",
    phone: "779779145",
  },
  {
    id: 43,
    name: "فرع بيت الفقية",
    governorate: "الحديدة",
    address: "الشارع العام- امام محطة الشماع",
    phone: "780013487",
  },

  // الضالع
  {
    id: 44,
    name: "فرع الضالع",
    governorate: "الضالع",
    address: "الشارع العام- جوار مستشفى التضامن",
    phone: "771556926",
  },
  {
    id: 45,
    name: "فرع الجبارة",
    governorate: "الضالع",
    address: "الشارع العام - أمام مستشفى مريس",
    phone: "770055527",
  },
  {
    id: 46,
    name: "فرع جبن",
    governorate: "الضالع",
    address: "الشارع العام- جوار مطعم أمواج الخليج",
    phone: "777733655",
  },
  {
    id: 47,
    name: "فرع دمت 1",
    governorate: "الضالع",
    address: "الشارع العام- أمام مدخل الأسدي",
    phone: "776500197",
  },
  {
    id: 48,
    name: "فرع دمت 2",
    governorate: "الضالع",
    address: "دمت الشارع العام امام فندق النصر",
    phone: "02455557",
  },
  {
    id: 49,
    name: "فرع سناح",
    governorate: "الضالع",
    address: "الشارع العام- فندق الشرق الاوسط",
    phone: "02450352",
  },
  {
    id: 50,
    name: "فرع قعطبة",
    governorate: "الضالع",
    address: "الشارع العام- عيادة الضالع النموذجية",
    phone: "770055527",
  },

  // المهرة
  {
    id: 51,
    name: "فرع الغيظة",
    governorate: "المهرة",
    address: "الجاحي- جوار مركز الفاروق الطبي",
    phone: "779149223",
  },
  {
    id: 52,
    name: "فرع شحن",
    governorate: "المهرة",
    address: "جوار الجمارك- عمارة المريسي",
    phone: "780500519",
  },

  // ذمار
  {
    id: 53,
    name: "فرع ذمار",
    governorate: "ذمار",
    address: "شارع صنعاء جوار بنك التضامن",
    phone: "774090392",
  },

  // شبوة
  {
    id: 54,
    name: "فرع شبوة عتق",
    governorate: "شبوة",
    address: "الشارع العام امام شركة يو للاتصالات",
    phone: "780500537",
  },

  // مأرب
  {
    id: 55,
    name: "فرع مأرب",
    governorate: "مأرب",
    address: "شارع 26 امام سوق هنت المركزي",
    phone: "776500157",
  },

  // البيضاء
  {
    id: 56,
    name: "فرع رداع",
    governorate: "البيضاء",
    address: "امام مطعم حرض",
    phone: "776500150",
  },
];

// Employees (الموظفين) - linked to branches
export const employees = [
  { id: 1, name: "محمد أحمد", branch: "فرع عدن الرئيسي" },
  { id: 2, name: "علي سالم", branch: "فرع عدن الرئيسي" },
  { id: 3, name: "فاطمة علي", branch: "فرع صنعاء الرئيسي - 22 مايو" },
  { id: 4, name: "أحمد حسن", branch: "فرع صنعاء الرئيسي - 22 مايو" },
  { id: 5, name: "سارة محمد", branch: "فرع السمسرة" },
  { id: 6, name: "خالد عبدالله", branch: "فرع السمسرة" },
  { id: 7, name: "نورة سعيد", branch: "فرع سيئون" },
  { id: 8, name: "يوسف أحمد", branch: "فرع سيئون" },
  { id: 9, name: "مريم علي", branch: "فرع إب الرئيسي" },
  { id: 10, name: "عبدالرحمن خالد", branch: "فرع الحديدة" },
  { id: 11, name: "ليلى محمد", branch: "فرع إب الرئيسي" },
];

export const operations = [
  { id: 1, name: "استلام حوالة", description: "Receive money transfer" },
  { id: 2, name: "صرف عملة", description: "Currency exchange" },
  { id: 3, name: "إيداع مبلغ", description: "Deposit money" },
  { id: 4, name: "سحب مبلغ", description: "Withdraw money" },
  { id: 5, name: "تحويل داخلي", description: "Internal transfer" },
  { id: 6, name: "تحويل خارجي", description: "International transfer" },
  { id: 7, name: "فتح حساب", description: "Open account" },
  { id: 8, name: "استفسار", description: "Inquiry" },
];
const db = localStorage;
export type props = {
  id: number;
  goverName: string;
  describtion?: string;
};

export function createGov(data: props) {
  if (!data) {
    return false;
  }

  try {
    const gettable = db.getItem("gover");
    let goverList: props[] = [];
    if (gettable) {
      goverList = JSON.parse(gettable);

      if (!Array.isArray(goverList)) {
        goverList = [];
      }

    
    }
    const newId = goverList.length > 0 ? Math.max(...goverList.map(g => g.id)) + 1 : 1;
    data.id = newId;
    if (goverList.find((g) => g.goverName === data.goverName)) {
     return false
    } else {
       goverList.push(data);
      db.setItem("gover", JSON.stringify(goverList));
      return true;
    }
  } catch (e) {
    return false;
  }
}
export function getGover() {
 if (!db) return [];

  const govern = db.getItem("gover");
  if (govern) {
    try {
      const data = JSON.parse(govern);
      // التأكد من أن البيانات المسترجعة هي مصفوفة فعلاً
      return Array.isArray(data) ? data : [data];
    } catch (e) {
      console.error("Error parsing governorates", e);
      return [];
    }
  }
  return [];
}
export type Bprops = {
  id: number;
  name: string;
  goverName: string;
  address: string;
  phoneNumber: number;
};
export function createBranch(data:Bprops){
 if (!data) {
    return false;
  }

  try {
    const gettable = db.getItem("branch");
    let goverList: Bprops[] = [];
    if (gettable) {
      goverList = JSON.parse(gettable);

      if (!Array.isArray(goverList)) {
        goverList = [];
      }

    
    }
    const newId = goverList.length > 0 ? Math.max(...goverList.map(g => g.id)) + 1 : 1;
    data.id = newId;
    if (goverList.find((g) => g.name === data.name)) {
     return false
    } else {
       goverList.push(data);
      db.setItem("branch", JSON.stringify(goverList));
      return true;
    }
  } catch (e) {
    return false;
  }
}

export function getbranch() {
 if (!db) return [];

  const govern = db.getItem("branch");
  if (govern) {
    try {
      const data = JSON.parse(govern);
      // التأكد من أن البيانات المسترجعة هي مصفوفة فعلاً
      return Array.isArray(data) ? data : [data];
    } catch (e) {
      console.error("Error parsing governorates", e);
      return [];
    }
  }
  return [];
}
export type Employee={
  id: number;
  name: string;
  branch: string;
  phone: number;
}
export function createEmployee(data: Employee) {
  if (!data || !data.name?.trim()) {
    return false;
  }

  try {
    const stored = db.getItem("employee");
    let employeeList: Employee[] = [];

    if (stored) {
      const parsed = JSON.parse(stored);
      employeeList = Array.isArray(parsed) ? parsed : [];
    }

    // Check for duplicate name
    const exists = employeeList.find((e) => e.name === data.name);
    if (exists) {
      return false; // duplicate
    }

    const newId = employeeList.length > 0 
      ? Math.max(...employeeList.map((g) => g.id)) + 1 
      : 1;
    
    data.id = newId;
    employeeList.push(data);
    db.setItem("employee", JSON.stringify(employeeList));
    return true;

  } catch (e) {
    console.error("createEmployee error:", e);
    return false;
  }
}
export function getEmployee() {
  if (!db) return []
  const employee = db.getItem("employee")
  if (employee) {
    try {
      const data = JSON.parse(employee);
      return Array.isArray(data)?data:[data]
    } catch (e) {
      return []
    }
  }
}

export type Rating = {
  id: number;
  rating: number;
  employee: string;
  operation: string;
  customer?: string;
  comment?: string;
}
export function createRating(data: Rating) {
  if (!data) {
    return false;
  }

  try {
    const stored = db.getItem("rating"); // ✅ fixed typo: "rating" not "ratng"
    let ratingList: Rating[] = [];

    if (stored) {
      const parsed = JSON.parse(stored);
      ratingList = Array.isArray(parsed) ? parsed : []; // ✅ check parsed, not raw string
    }

    const newId = ratingList.length > 0
      ? Math.max(...ratingList.map((r) => r.id)) + 1
      : 1;

    data.id = newId;
    ratingList.push(data);
    db.setItem("rating", JSON.stringify(ratingList));
    
    return true; // ✅ return success

  } catch (e) {
    console.error("createRating error:", e);
    return false;
  }
}
export function getRating() {
  if (typeof window === "undefined") return [];

  const ratingData = localStorage.getItem("rating");
  const employeeData = localStorage.getItem("employee");

  let allReviews: any[] = [];
  let allEmployees: any[] = [];

  // Parse ratings
  if (ratingData) {
    try {
      const parsed = JSON.parse(ratingData);
      if (Array.isArray(parsed)) allReviews = parsed;
    } catch (e) {
      console.error("Error parsing ratings:", e);
    }
  }

  // Parse employees
  if (employeeData) {
    try {
      const parsed = JSON.parse(employeeData);
      if (Array.isArray(parsed)) allEmployees = parsed;
    } catch (e) {
      console.error("Error parsing employees:", e);
    }
  }

  // Group ratings by employee name
  const grouped: { [key: string]: { totalRating: number; count: number } } = {};

  allReviews.forEach((review) => {
    const empName = review.employee;
    const rate = Number(review.rating) || 0;

    if (!empName) return;

    if (!grouped[empName]) {
      grouped[empName] = { totalRating: 0, count: 0 };
    }

    grouped[empName].totalRating += rate;
    grouped[empName].count += 1;
  });

  // Build result from ALL employees, not just rated ones
  const result = allEmployees.map((emp, index) => {
    const name = emp.name;
    const hasRating = grouped[name];
    const average = hasRating
      ? grouped[name].totalRating / grouped[name].count
      : 0;

    return {
      id: emp.id || index + 1,
      name: name,
      branch: emp.branch || "غير محدد",
      rating: Number(average.toFixed(1)),
      reviews: hasRating ? grouped[name].count : 0,
      image: name.charAt(0),
    };
  });

  // Sort: rated employees first (highest rating), then unrated
  return result.sort((a, b) => {
    if (a.reviews === 0 && b.reviews === 0) return 0;
    if (a.reviews === 0) return 1;
    if (b.reviews === 0) return -1;
    return b.rating - a.rating;
  });
}