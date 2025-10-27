import { ToastProps } from '@/app/lib/definitions';
import X from '@/public/x.svg';

/** Toast Component to display error or success messages */
const Toast = ({ message, close, type }: ToastProps) => {
    return (
        <div className={`${type === 'error' ? 'bg-red-500' : 'bg-green-500'} fixed flex justify-center z-50 w-10/12 mx-auto rounded-lg overflow-hidden shadow-lg top-4 left-1/2 transform -translate-x-1/2`}>
            <div className={`$ text-white w-full grow px-4 py-2`}>
                {Array.isArray(message) ? message.map((msg, index) => (
                    <div key={index} className="px-4 py-2">
                        {msg}
                    </div>
                )) : (
                    <div className="px-4 py-2">
                        {message}
                    </div>
                )}
            </div>
            <div className={`flex items-center px-2`}>
                <button onClick={close} className="text-2xl font-bold text-white hover:text-gray-200 ml-4 cursor-pointer">
                    <X width={20} height={20} className="fill-white" />
                </button>
            </div>
        </div >
    );
}

export default Toast;