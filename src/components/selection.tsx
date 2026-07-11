interface Option {
  id: number | string;
  name?: string;
  goverName?: string;
  branchName?: string;
  employeeName?: string;
}

interface SelectFieldProps {
  options: Option[];
  paramKey?: string;
  action: (value: string) => void;
  placeholder: string;
  value: string;
}

export function Selection({
  options,
  paramKey,
  action,
  placeholder,
  value,
}: SelectFieldProps) {
  return (
    <div className="form-group">
      {paramKey && <label className="text-3xl font-bold underline">{paramKey}</label>}
      <select
        onChange={(e) => action(e.target.value)}
        value={value}
        required
        className="select-input"
      >
        <option value="">{placeholder}</option>
        {options.map((option, index) => {
          const displayName = option.name || option.goverName || option.branchName || option.employeeName || "";
          
          return (
            <option key={`${option.id}-${index}`} value={displayName}>
              {displayName}
            </option>
          );
        })}
      </select>
    </div>
  );
}