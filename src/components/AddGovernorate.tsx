import { useState, type FormEvent } from "react";
import { createGov,getGover  } from "../libs/data";
import Dialog from "./Dialog";
interface Governorate {
  id: number;
  goverName: string;
}
export default function AddGovernorate() {
  const governorates = getGover() as Governorate[];

 const[isOpen,setIsopen]=useState(false)
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const governorateName =
      formData.get("governorateName")?.toString().trim() || "";
    const notes = formData.get("notes")?.toString().trim() || "";

    // تحقق أساسي (Validation): التأكد من أن الاسم ليس فارغاً أو مسافات فقط
    if (!governorateName) {
      alert("يرجى إدخال اسم المحافظة بشكل صحيح.");
      return;
    }

    // استدعاء الدالة وحفظ النتيجة في متغير (ستكون إما true أو false)
    const isSuccess = createGov({
      id: 0, // سيتم استبداله تلقائياً داخل الدالة بـ ID ديناميكي
      goverName: governorateName,
      describtion: notes,
    });

    if (isSuccess) {
      // تم إصلاح طباعة اسم المحافظة هنا بدلاً من ${event}
      alert(
        `تم تجهيز بيانات المحافظة وحفظها بنجاح:\nالاسم: ${governorateName}\nالملاحظات: ${notes}`,
      );
      event.currentTarget.reset(); // تفريغ الحقول بعد النجاح
    } else {
      alert("حدث خطأ أثناء محاولة حفظ البيانات، يرجى المحاولة مجدداً.");
    }
  }
  return (
    <main className="admin-page" dir="rtl">
        <div className="branch-toolbar">
        <div className="search-box"> <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg> <input placeholder="بحث المحافظه" className="search-input"></input></div>
      <Dialog isopen={isOpen} btn={<button onClick={() => setIsopen(!isOpen)} className="add-branch-btn">إضافة محافظة</button>} setIsOpen={setIsopen}>
      <section className="admin-form-card">
        <div className="admin-form-header">
          <span className="eyebrow">إضافة محافظة</span>
          <h1>بيانات المحافظة الجديدة</h1>
          <p>أضف محافظة جديدة حتى يمكن ربط الفروع بها لاحقاً.</p>
        </div>

        <form className="admin-form" onSubmit={handleSubmit}>
          <label>
            اسم المحافظة
            <input
              type="text"
              name="governorateName"
              placeholder="مثال: عدن"
              required
            />
          </label>

          <label>
            ملاحظات
            <textarea
              name="notes"
              placeholder="أي تفاصيل إضافية عن المحافظة"
              rows={4}
            />
          </label>

          <button type="submit">حفظ المحافظة</button>
        </form>
          </section></Dialog></div>
      <div className="branch-table-wrapper">
        <div className="branch-table-header"><span>الإجمالي:{ 34} </span></div>
        <div className="branch-table">
          <div className="branch-row branch-row-header" >
            <div className="col-num">#</div>
            <div className="col-name">اسم المحافظه</div>
            <div>ملاحظه</div>
          </div>
          <div className="headersticky">
            {governorates.length === 0 ? (
                <div className="branch-empty">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p>لا توجد فروع مطابقة للبحث</p>
            </div>
            ) : (
                governorates.map((gover, key) => (
                  <div key={ key} className="branch-row">
                    <div className="col-num">{ gover.id}</div>
           <div className="col-name">{ gover.goverName}</div>
                     <div className="col-name">{ "."}</div>

                  </div>
                ))
          
            )}
</div>          
      </div>
      </div>
    </main>
  );
}
