import { Heading, Input, Button } from "../../components";

export function Login() {
    return (
        <div className="w-full h-full flex p-5">
            <div>
                <Heading content="Signin to your PopX account" className="leading-[36px] pr-[100px]" />
                <p className="text-primary opacity-[.6] pr-[85px] mt-2 text-[18px] leading-[26px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                <form className="text-[13px]">
                    <Input label="Email Address" type="email" placeholder="Enter email address"/>
                    <Input label="Password" type="password" placeholder="Enter password"/>
                    <Button name={"Login"} type="submit" category={"primary"} disabled={true} className="mt-[14px] text-[16px]"/>
                </form>
            </div>
        </div>
    )
}
