import { useState, type FormEvent, useMemo } from "react";
import { createBranch, getbranch, branches,governorates, getGover } from "../libs/data";
import Dialog from "./Dialog";

interface Branch {
  id: number;
  name: string;
  goverName: string;
  address: string;
  phoneNumber: number;
}

interface Governorate {
  id: number;
  goverName: string;
}

export default function AddBranch() {
  // const governorates = getGover() as Governorate[];
  // const branches = getbranch() as Branch[];

  const [isOpen, setIsOpen] = useState(false);
  // const [isEditOpen, setIsEditOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  // const [editingBranch, setEditingBranch] = useState<Branch | null>(null);

  // Filter branches based on search query
  const filteredBranches = useMemo(() => {
    if (!searchQuery.trim()) return branches;
    const query = searchQuery.toLowerCase();
    return branches.filter(
      (branch) =>
        branch.name.toLowerCase().includes(query) ||
        branch.governorate.toLowerCase().includes(query) ||
        branch.address.toLowerCase().includes(query) ||
        branch.phone.toString().includes(query),
    );
  }, [branches, searchQuery]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const branchName = formData.get("branchName")?.toString() ?? "";
    const goveName = formData.get("governorate")?.toString() ?? "";
    const address = formData.get("address")?.toString() ?? "";
    const phoneNumber = formData.get("phone");

    const isSucesseed = createBranch({
      id: 0,
      name: branchName,
      goverName: goveName,
      address: address,
      phoneNumber: Number(phoneNumber),
    });

    if (isSucesseed) {
      alert(
        `تم تجهيز بيانات الفرع وحفظها بنجاح:\nالاسم: ${branchName}\nالمحافظة: ${goveName}`,
      );
      event.currentTarget.reset();
      setIsOpen(false);
    } else {
      alert("حدث خطأ أثناء محاولة حفظ البيانات، يرجى المحاولة مجدداً.");
    }
  }

  // function handleEditSubmit(event: FormEvent<HTMLFormElement>) {
  //   event.preventDefault();
  //   if (!editingBranch) return;

  //   const formData = new FormData(event.currentTarget);
  //   const branchName = formData.get("branchName")?.toString() ?? "";
  //   const goveName = formData.get("governorate")?.toString() ?? "";
  //   const address = formData.get("address")?.toString() ?? "";
  //   const phoneNumber = formData.get("phone");

  //  updateBranch({
  //     id: editingBranch.id,
  //     name: branchName,
  //     goverName: goveName,
  //     address: address,
  //     phoneNumber: Number(phoneNumber),
  //   });

  //   // if (isSucesseed) {
  //   //   alert(`تم تحديث بيانات الفرع "${branchName}" بنجاح!`);
  //   //   setIsEditOpen(false);
  //   //   setEditingBranch(null);
  //   // } else {
  //   //   alert("حدث خطأ أثناء محاولة تحديث البيانات، يرجى المحاولة مجدداً.");
  //   // }
  // }

  // function handleDelete(branch: Branch) {
  //   // if (window.confirm(`هل أنت متأكد من حذف الفرع "${branch.name}"؟`)) {
  //   //   const isDeleted = deleteBranch(branch.id);
  //   //   if (isDeleted) {
  //   //     alert(`تم حذف الفرع "${branch.name}" بنجاح!`);
  //   //   } else {
  //   //     alert("حدث خطأ أثناء محاولة الحذف، يرجى المحاولة مجدداً.");
  //   //   }
  //   // }
  // }

  // function openEditDialog(branch: Branch) {
  //   setEditingBranch(branch);
  //   setIsEditOpen(true);
  // }

  return (
    <main className="admin-page" dir="rtl">
      {/* Search & Add Bar */}
      <div className="branch-toolbar">
        <div className="search-box">
          <svg
            className="search-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            type="text"
            placeholder="ابحث بالاسم، المحافظة، العنوان، أو الرقم..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          {searchQuery && (
            <button className="clear-search" onClick={() => setSearchQuery("")}>
              ×
            </button>
          )}
        </div>

        <Dialog
          isopen={isOpen}
          setIsOpen={setIsOpen}
          btn={
            <button className="add-branch-btn" onClick={() => setIsOpen(true)}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
              إضافة فرع
            </button>
          }
        >
          <section className="admin-form-card">
            <div className="admin-form-header">
              <span className="eyebrow">إضافة فرع</span>
              <h1>بيانات الفرع الجديد</h1>
              <p>أدخل اسم الفرع والمحافظة ومعلومات التواصل.</p>
            </div>

            <form className="admin-form" onSubmit={handleSubmit}>
              <label>
                المحافظة
                <select name="governorate" required>
                  <option value="">اختر المحافظة</option>
                  {governorates.map((governorate) => (
                    <option key={governorate.id} value={governorate.name}>
                      {governorate.name}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                اسم الفرع
                <input
                  type="text"
                  name="branchName"
                  placeholder="مثال: فرع عدن"
                  required
                />
              </label>

              <label>
                العنوان
                <input type="text" name="address" placeholder="عنوان الفرع" />
              </label>

              <label>
                رقم الهاتف
                <input type="tel" name="phone" placeholder="77xxxxxxx" />
              </label>

              <button type="submit">حفظ الفرع</button>
            </form>
          </section>
        </Dialog>
      </div>

      {/* Edit Dialog */}
      {/* {editingBranch && (
        <Dialog
          isopen={isEditOpen}
          setIsOpen={setIsEditOpen}
          btn={null}
        >
          <section className="admin-form-card">
            <div className="admin-form-header">
              <span className="eyebrow">تعديل فرع</span>
              <h1>تعديل بيانات الفرع</h1>
              <p>قم بتحديث معلومات الفرع أدناه.</p>
            </div>

            <form className="admin-form" onSubmit={handleEditSubmit}>
              <label>
                المحافظة
                <select name="governorate" defaultValue={editingBranch.goverName} required>
                  <option value="">اختر المحافظة</option>
                  {governorates.map((governorate) => (
                    <option key={governorate.id} value={governorate.goverName}>
                      {governorate.goverName}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                اسم الفرع
                <input
                  type="text"
                  name="branchName"
                  defaultValue={editingBranch.name}
                  placeholder="مثال: فرع عدن"
                  required
                />
              </label>

              <label>
                العنوان
                <input type="text" name="address" defaultValue={editingBranch.address} placeholder="عنوان الفرع" />
              </label>

              <label>
                رقم الهاتف
                <input type="tel" name="phone" defaultValue={editingBranch.phoneNumber} placeholder="77xxxxxxx" />
              </label>

              <div className="form-actions">
                <button type="button" className="cancel-btn" onClick={() => setIsEditOpen(false)}>
                  إلغاء
                </button>
                <button type="submit">تحديث الفرع</button>
              </div>
            </form>
          </section>
        </Dialog>
      )} */}

      {/* Branch Table */}
      <div className="branch-table-wrapper">
        <div className="branch-table-header">
          <span>الإجمالي: {filteredBranches.length} فرع</span>
        </div>

        <div className="branch-table">
          {/* Table Header */}
          <div className="branch-row branch-row-header">
            <div className="col-num">#</div>
            <div className="col-name">اسم الفرع</div>
            <div className="col-gov">المحافظة</div>
            <div className="col-address">العنوان</div>
            <div className="col-phone">الهاتف</div>
            <div className="col-actions">إجراءات</div>
          </div>
          <div className="headersticky">
            {/* Table Body */}
            {filteredBranches.length === 0 ? (
              <div className="branch-empty">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p>لا توجد فروع مطابقة للبحث</p>
              </div>
            ) : (
              filteredBranches.map((branch, index) => (
                <div key={branch.id} className="branch-row">
                  <div className="col-num">
                    <span className="row-number">{index + 1}</span>
                  </div>
                  <div className="col-name">
                    <strong>{branch.name}</strong>
                  </div>
                  <div className="col-gov">
                    <span className="gov-badge">{branch.governorate}</span>
                  </div>
                  <div className="col-address">{branch.address}</div>
                  <div className="col-phone">{branch.phone}</div>
                  <div className="col-actions">
                    {/* <button
                      className="action-btn edit-btn"
                      onClick={() => openEditDialog(branch)}
                      title="تعديل"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                        <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                      </svg>
                    </button> */}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
