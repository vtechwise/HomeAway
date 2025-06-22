import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type FormInputProps = {
  name: string;
  type: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
};

const FormInput = (props: FormInputProps) => {
  const { name, defaultValue, label, placeholder, type } = props;
  return (
    <div>
      <div className="mb-2">
        <Label htmlFor={name}>{label || name}</Label>
        <Input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          defaultValue={defaultValue}
        />
      </div>
    </div>
  );
};
export default FormInput;
