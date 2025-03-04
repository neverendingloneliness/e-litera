import * as React from "react"
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { cn } from "@/lib/utils"
import { Input } from "./input";

export interface PasswordInputProps
    extends React.InputHTMLAttributes<HTMLInputElement>{}

const PasswordInput = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false)
    return (
      <Input
        type={showPassword ? "text" : "password"}
        suffix={showPassword ? <FaEye className="select-none text-purple-600" onClick={() => setShowPassword(false)}/> : <FaEyeSlash className="select-none text-purple-600" onClick={() => setShowPassword(true)}/>}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
PasswordInput.displayName = "PasswordInput"

export { PasswordInput }
