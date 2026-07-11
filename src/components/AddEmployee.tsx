
import { getRating } from "../libs/data";
import AddEmployee from "./NewEmployee";

// const rankedEmployees = [
//   {
//     id: 1,
//     name: "محمد أحمد",
//     branch: "فرع عدن الرئيسي",
//     rating: 4.9,
//     reviews: 128,
//     image: "م",
//   },
//   {
//     id: 2,
//     name: "فاطمة علي",
//     branch: "فرع صنعاء الرئيسي",
//     rating: 4.7,
//     reviews: 96,
//     image: "ف",
//   },
//   {
//     id: 3,
//     name: "خالد عبدالله",
//     branch: "فرع السمسرة",
//     rating: 4.5,
//     reviews: 84,
//     image: "خ",
//   },
//   {
//     id: 4,
//     name: "نورة سعيد",
//     branch: "فرع سيئون",
//     rating: 4.3,
//     reviews: 71,
//     image: "ن",
//   },
// ];

export default function Employee() {
    const rankedEmployees = getRating()
     const ratedEmployees = rankedEmployees.filter((e) => e.reviews > 0);
  const overallAverage = ratedEmployees.length > 0
    ? (ratedEmployees.reduce((sum, e) => sum + e.rating, 0) / ratedEmployees.length).toFixed(1)
    : "0.0";

   return (
    <main className="admin-page" dir="rtl">
      <section className="ranking-hero">
        <div>
          <span className="eyebrow">لوحة الموظفين</span>
          <h1>ترتيب تقييم الموظفين</h1>
          <p>
            هنا يمكنك عرض التقييم العام لكل موظف حسب الاسم، الفرع، وعدد
            التقييمات.
          </p>
          <AddEmployee />
        </div>
        <div className="rating-summary-card">
          <span>متوسط التقييم العام</span>
          <strong>{overallAverage}</strong>
          <small>من 5 نجوم</small>
        </div>
      </section>

      <div className="addnewemployee"></div>

      <section className="employee-ranking-list">
        {rankedEmployees.map((employee, index) => (
          <article className="employee-rank-card" key={employee.id}>
            <div className="rank-number">#{index + 1}</div>
            <div className="employee-avatar" aria-hidden="true">
              {employee.image}
            </div>
            <div className="employee-rank-info">
              <h3>{employee.name}</h3>
              <p>{employee.branch}</p>
            </div>
            <div className="employee-rating">
              <strong>{employee.rating.toFixed(1)}</strong>
              <span className="stars-display">
                {employee.reviews > 0
                  ? "★".repeat(Math.min(Math.round(employee.rating), 5)) +
                    "☆".repeat(5 - Math.min(Math.round(employee.rating), 5))
                  : "☆☆☆☆☆"}
              </span>
              <small>{employee.reviews > 0 ? `${employee.reviews} تقييم` : "لا يوجد تقييم"}</small>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

