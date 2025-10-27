interface Stylist {
    photo: string;
    name: string;
    description: string;
}

interface Service {
    title: string;
    description: string;
    price: string;
}

interface ToastMessage {
    message: string[] | string;
    type: 'success' | 'error';
}

interface ToastProps extends ToastMessage {
    close: () => void;
}

export type { Stylist, Service, ToastMessage, ToastProps };


