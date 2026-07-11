import { useState, type FormEvent } from "react";
import { createEmployee, getbranch } from "../libs/data";
import Dialog from "./Dialog";

export default function AddEmployee() {
  const [isOpen, setIsOpen] = useState(false);
  const branches = getbranch();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")?.toString()?.trim() ?? "";
    const branchName = formData.get("branchName")?.toString() ?? "";
    const phoneRaw = formData.get("phone");
    const phoneNumber = phoneRaw ? Number(phoneRaw) : undefined;

    if (!name) {
      alert("يرجى إدخال اسم الموظف");
      return;
    }

    const isSuccess = createEmployee({
      id: 0,
      name: name,
      branch: branchName,
      phone: phoneNumber ?? 0,
    });

    if (isSuccess) {
      alert("تم حفظ بيانات الموظف بنجاح!");
      event.currentTarget.reset();
      setIsOpen(false);
    } else {
      alert("حدث خطأ: قد يكون الاسم مكرراً أو هناك مشكلة في الحفظ.");
    }
  }

  return (
    <>
      <Dialog
        isopen={isOpen}
        setIsOpen={setIsOpen}
        btn={
          <button className="button" onClick={() => setIsOpen(true)}>
            موظف +
          </button>
        }
      >
        <form className="admin-form" onSubmit={handleSubmit}>
          <label>
            الفرع
            <select name="branchName" required>
              <option value="">اختر الفرع</option>
              {branches.map((branch) => (
                <option key={branch.id} value={branch.name}>
                  {branch.name}
                </option>
              ))}
            </select>
          </label>

          <label>
            اسم الموظف
            <input
              type="text"
              name="name"
              placeholder="مثال: أحمد محمد"
              required
            />
          </label>

          <label>
            رقم الهاتف
            <input type="tel" name="phone" placeholder="77xxxxxxx" />
          </label>

          <button type="submit">حفظ الموظف</button>
        </form>
      </Dialog>
    </>
  );
}