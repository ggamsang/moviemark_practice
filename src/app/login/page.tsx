"use client";

import { useState } from "react";
import Image from "next/image";
import LoginForm from "@/components/auth/LoginForm/LoginForm";
import { useRouter } from "next/navigation";

export default function LoginPage() {
	const [errorMessage, setErrorMessage] = useState<string | null>(null);

	const handleLoginSuccess = () => {
		const router = useRouter()
		router.push('/')
	}
	
	const handleLoginError = (error: Error) => {
		setErrorMessage(error.message)
	}

	return (
		<div className="flex flex-col flex-1 h-full w-full justify-center">
			<div className="flex items-center justify-center w-full gap-[12rem]">
				<div className="flex-1">
					<Image
						src="/images/sally.png"
						alt="sally"
						width={486}
						height={584}
						className="text-white"
					/>
				</div>
				<div className="flex-1">
					<LoginForm onSuccess={handleLoginSuccess} onError={handleLoginError} />
					{errorMessage && <p style={{ color: 'red' }}>**{errorMessage}**</p>}
				</div>
			</div>
		</div>
	);
}