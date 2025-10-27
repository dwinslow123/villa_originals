'use client';
import { useActionState, useState, useEffect } from "react";
import sendMessage from "@/app/lib/send_message";
import Toast from "@/app/components/Toast";

/** Contact Form Component */
const ContactForm = () => {
    const [ state, formAction, pending ] = useActionState(sendMessage, undefined);
    const [ showErrorToast, setShowErrorToast ] = useState(!!state?.errors);
    const [ showSuccessToast, setShowSuccessToast ] = useState(false);
    const [ formData, setFormData ] = useState<FormData | null>(null);

    const errorArray = state?.errors ? Object.values(state?.errors?.properties || {}).flat().map(error => typeof error === 'object' && error.errors ? error.errors : error).flat().filter((item): item is string => typeof item === 'string') : [];

    /** Handles Closing Action on Toast Components */
    const handleClose = () => {
        setShowErrorToast(false);
        setShowSuccessToast(false);
    };

    /** Formats the phone number into XXX-XXX-XXXX and then updates the form data */
    const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => {
            const updatedFormData = new FormData();
            if (prev) {
                for (const [ key, value ] of prev.entries()) {
                    updatedFormData.set(key, value);
                }
            }

            const formattedPhoneNumber = e.target.value.replace(/[^0-9]/g, '').substring(0, 10);

            if (formattedPhoneNumber.length > 10) {
                return updatedFormData;
            }

            if (formattedPhoneNumber.length === 10) {
                const areaCode = formattedPhoneNumber.substring(0, 3);
                const firstThree = formattedPhoneNumber.substring(3, 6);
                const secondFour = formattedPhoneNumber.substring(6, 10);
                updatedFormData.set(e.target.name, `${areaCode}-${firstThree}-${secondFour}`);
                return updatedFormData;
            }
            updatedFormData.set(e.target.name, e.target.value);
            return updatedFormData;
        })
    };

    /** Handles Input Change for all form fields */
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        if (!formData) {
            setFormData(new FormData());
        }
        if (e.target.name === 'phone-number') {
            handlePhoneNumberChange(e as React.ChangeEvent<HTMLInputElement>);
            return;
        }

        setFormData(prev => {
            const updatedFormData = new FormData();
            if (prev) {
                for (const [ key, value ] of prev.entries()) {
                    updatedFormData.set(key, value);
                }
            }

            updatedFormData.set(e.target.name, e.target.value);
            return updatedFormData;
        })
    };

    useEffect(() => {
        if (state?.success) {
            setShowSuccessToast(true);
            setShowErrorToast(false);
            setFormData(new FormData());
        } else if (state?.errors) {
            setShowErrorToast(true);
            setShowSuccessToast(false);
        } else {
            setShowErrorToast(false);
            setShowSuccessToast(false);
        }
    }, [ state ]);

    return (
        <div className="isolate bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-3xl bg-white rounded-xl p-10 shadow-xl shadow-black/5 ring-1 ring-black/10 h-auto">
                {showErrorToast && <Toast type="error" message={errorArray} close={handleClose} />}
                {showSuccessToast && <Toast type="success" message="Message sent successfully!" close={handleClose} />}
                <div className="mx-auto max-w-2xl text-center text-gray-900">
                    <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">Contact Us</h2>
                    <p className="mt-2 text-lg/8 text-gray-700">We are excited to hear from you!</p>
                </div>
                <form action={formAction} className="mx-auto mt-16 max-w-xl sm:mt-20">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="firstName" className="block text-sm/6 font-semibold text-gray-900">
                                First Name
                            </label>
                            <div className="mt-2.5">
                                <input
                                    value={formData?.get('firstName') as string || ''}
                                    onChange={handleInputChange}
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    autoComplete="name"
                                    className="font-sans block w-full  bg-white/5 px-3.5 py-2 text-base text-gray-900 outline-2 -outline-offset-2 outline-gray-800/10 placeholder:text-gray-700 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-500"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-sm/6 font-semibold text-gray-900">
                                Last Name
                            </label>
                            <div className="mt-2.5">
                                <input
                                    value={formData?.get('lastName') as string || ''}
                                    onChange={handleInputChange}
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    autoComplete="family-name"
                                    className="font-sans block w-full  bg-white/5 px-3.5 py-2 text-base text-gray-900 outline-2 -outline-offset-2 outline-gray-800/10 placeholder:text-gray-700 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-500"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
                                Email
                            </label>
                            <div className="mt-2.5">
                                <input
                                    value={formData?.get('email') as string || ''}
                                    onChange={handleInputChange}
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    className="font-sans block w-full  bg-white/5 px-3.5 py-2 text-base text-gray-900 outline-2 -outline-offset-2 outline-gray-800/10 placeholder:text-gray-700 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-500"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-gray-900">
                                Phone number
                            </label>
                            <div className="mt-2.5">
                                <div className="flex bg-white/5 outline-2 -outline-offset-2 outline-gray-900/10 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-gray-500">
                                    <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                                        <select
                                            id="country"
                                            name="country"
                                            autoComplete="country"
                                            aria-label="Country"
                                            className="font-sans block w-full  bg-white/5 px-3.5 py-2 text-base text-gray-900 outline-2 -outline-offset-2 outline-gray-800/10 placeholder:text-gray-700 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-500"
                                        >
                                            <option>US</option>
                                            <option>CA</option>
                                            <option>EU</option>
                                        </select>
                                    </div>
                                    <input
                                        value={formData?.get('phone-number') as string || ''}
                                        onChange={handleInputChange}
                                        id="phone-number"
                                        name="phone-number"
                                        type="tel"
                                        pattern="\d{3}-\d{3}-\d{4}"
                                        placeholder="123-456-7890"
                                        className="font-sans block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
                                Message
                            </label>
                            <div className="mt-2.5">
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="font-sans block w-full  bg-white/5 px-3.5 py-2 text-base text-gray-900 outline-2 -outline-offset-2 outline-gray-800/10 placeholder:text-gray-700 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-500"
                                    value={formData?.get('message') as string || ''}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-2 sm:mt-6">
                        <button
                            disabled={pending}
                            type="submit"
                            className="block w-full  bg-white/5 px-3.5 py-2 text-base text-gray-900 outline-2 -outline-offset-2 outline-gray-800/10 placeholder:text-gray-700 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-500 hover:bg-gray-800 hover:text-white transition"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div >
    )
}

export default ContactForm;