import { useState, type FormEvent } from "react";
import { getbranch, createRating, getEmployee, getGover, operations } from "../libs/data";
import { Selection } from "./selection";

export default function FeedbackForm() {
  const [rating, setRating] = useState(0);
  const [governorate, setGovernorate] = useState("");
  const [branch, setBranch] = useState("");
  const [operation, setOperation] = useState("");
  const [employee, setEmployee] = useState("");

  const employees = getEmployee();
  const branches = getbranch();
  const governorates = getGover();

  // Filter only — keep original shape with id + goverName/name/branch
  const filteredBranches = branches.filter((b) => {
    const match = b.goverName?.trim() === governorate.trim();
    console.log(`Comparing: "${b.goverName?.trim()}" === "${governorate.trim()}" => ${match}`);
    return match;
  });

  const filteredEmployees = employees?.filter((e) => e.branch?.trim() === branch.trim()) || [];

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const customerName = formData.get("customerName")?.toString();
    const feedback = formData.get("feedback")?.toString();

    if (rating === 0) {
      alert("يرجى اختيار تقييم بالنجوم أولاً.");
      return;
    }

    const isSuccess = createRating({
      id: 0,
      rating,
      employee: employee,
      operation: operation,
      customer: customerName,
      comment: feedback,
    });

    if (isSuccess) {
      alert("شكراً لك! تم إرسال التقييم بنجاح.");
      setRating(0);
      setGovernorate("");
      setBranch("");
      setEmployee("");
      setOperation("");
      event.currentTarget.reset();
    } else {
      alert("حدث خطأ أثناء إرسال التقييم، يرجى المحاولة مجدداً.");
    }
  }

  return (
    <form className="feedback-dashboard-card" onSubmit={handleSubmit} dir="rtl">
      <div className="feedback-dashboard-header">
        <span className="eyebrow">نموذج التقييم</span>
        <h1>شاركنا تجربتك</h1>
        <p>اختر المحافظة والفرع والموظف، ثم أضف تقييمك حتى نطوّر الخدمة بشكل أفضل.</p>
      </div>

    <div className="feedback-dashboard-grid">
        <label>
          المحافظة
          <Selection
            options={governorates}
            value={governorate}
            action={(value: string) => {
              console.log("Selected governorate:", value);
              setGovernorate(value);
              setBranch("");
              setEmployee("");
            }}
            placeholder="اختر المحافظة"
          />
        </label>

        <label>
          الفرع
          <Selection
            options={filteredBranches}
            value={branch}
            action={(value: string) => {
              setBranch(value);
              setEmployee("");
            }}
            placeholder="اختر الفرع"
          />
        </label>

        <label>
          الموظف
          <Selection
            options={filteredEmployees}
            value={employee}
            action={(value: string) => setEmployee(value)}
            placeholder="اختر الموظف"
          />
        </label>

        <label>
          العملية
          <Selection
            options={operations}
            value={operation}
            action={(value: string) => setOperation(value)}
            placeholder="اختر العملية"
          />
        </label>

        <label>
          اسم العميل
          <input type="text" name="customerName" placeholder="اكتب اسمك" />
        </label>

        <label className="feedback-full-width">
          التعليق
          <textarea
            name="feedback"
            placeholder="اكتب ملاحظتك هنا"
            rows={3}
            required
          />
        </label>
      </div>

      <div className="feedback-rating-panel">
        <div>
          <span className="feedback-rating-label">التقييم العام</span>
          <strong>{rating}/5</strong>
        </div>
        <div className="feedback-stars" aria-label="اختر التقييم">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              className={star <= rating ? "active" : ""}
              onClick={() => setRating(star)}
              aria-label={`${star} من 5`}
            >
              ★
            </button>
          ))}
          <input type="hidden" name="rating" value={rating} />
        </div>
      </div>

      <button className="feedback-submit-button" type="submit">
        إرسال التقييم
      </button>
    </form>
  );
}