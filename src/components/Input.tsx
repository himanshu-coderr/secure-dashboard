import React from 'react';

interface InputFormFieldProps {
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  email: string;
  password: string;
}

const InputFormField: React.FC<InputFormFieldProps> = (props)=> {
  const {setEmail, setPassword, email,password} = props;
  return(

    <div className="my-4">
      <input
            className="border p-2 my-2 w-full"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            className="border p-2 my-2 w-full"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
    </div>
    )
};

export default InputFormField;
