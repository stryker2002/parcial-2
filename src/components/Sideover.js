import { XMarkIcon } from "@/assets";

function Header({ label, onHide, className, ...restProps }) {
    return (
        <div
            className={`py-6 px-4 sm:px-6 h-[70px] bg-white border-b border-gray-200 ${
                className ?? ""
            }`}
            {...restProps}
        >
            <div className="flex items-center justify-between">
                <h2
                    className="text-gray-900 text-base font-semibold awb awk bac"
                    id="headlessui-dialog-title-3"
                    data-headlessui-state="open"
                >
                    {label}
                </h2>
                <div className="flex items-center ml-3 h-7">
                    <button
                        type="button"
                        title="Cerrar"
                        className="text-gray-500 hover:text-gray-700 rounded-md focus:ring"
                        onClick={onHide}
                    >
                        <span className="hidden">Close panel</span>
                        <XMarkIcon className="h-6 w-6" />
                    </button>
                </div>
            </div>
        </div>
    );
}

function Body({ className, children }) {
    return (
        <div
            className={`${
                className ? className : "h-[calc(100%_-_70px)] overflow-y-auto"
            }`}
        >
            {children}
        </div>
    );
}

function Footer({ children }) {
    return (
        <div className="flex items-start justify-end py-4 px-4 h-32 sm:h-[70px] bg-white border-t border-gray-200 shrink-0">
            {children}
        </div>
    );
}

export default function SideOver({ children, backdrop = false, visible }) {
    if (visible === false) return null;

    return (
        <>
            <div className="absolute top-0 right-0 h-screen w-screen max-w-md z-30 overflow-hidden">
                <div className="h-full w-full shadow-xl overflow-y-auto">
                    {children}
                </div>
            </div>
            {backdrop ? (
                <div className="absolute top-0 left-0 h-screen w-screen bg-black opacity-25 z-20"></div>
            ) : null}
        </>
    );
}

SideOver.Header = Header;
SideOver.Body = Body;
SideOver.Footer = Footer;
