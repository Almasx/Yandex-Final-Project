
interface DeveloperProps {
    name: string;
    address: string;
}
const MapDeveloper = ({name, address}: DeveloperProps) => {
    return (
        <div className="flex flex-col">
            <p className="text-white font-medium">{name}</p>
            <p className="text-white opacity-30 flex items-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.9999 11.8083C8.2249 11.8083 6.7749 10.3667 6.7749 8.58334C6.7749 6.8 8.2249 5.36667 9.9999 5.36667C11.7749 5.36667 13.2249 6.80834 13.2249 8.59167C13.2249 10.375 11.7749 11.8083 9.9999 11.8083ZM9.9999 6.61667C8.91657 6.61667 8.0249 7.5 8.0249 8.59167C8.0249 9.68334 8.90824 10.5667 9.9999 10.5667C11.0916 10.5667 11.9749 9.68334 11.9749 8.59167C11.9749 7.5 11.0832 6.61667 9.9999 6.61667Z" fill="white"/>
                    <path d="M9.9999 18.9667C8.76657 18.9667 7.5249 18.5 6.55824 17.575C4.0999 15.2083 1.38324 11.4333 2.40824 6.94166C3.33324 2.86666 6.89157 1.04166 9.9999 1.04166C9.9999 1.04166 9.9999 1.04166 10.0082 1.04166C13.1166 1.04166 16.6749 2.86666 17.5999 6.94999C18.6166 11.4417 15.8999 15.2083 13.4416 17.575C12.4749 18.5 11.2332 18.9667 9.9999 18.9667ZM9.9999 2.29166C7.5749 2.29166 4.45824 3.58332 3.63324 7.21666C2.73324 11.1417 5.1999 14.525 7.43324 16.6667C8.8749 18.0583 11.1332 18.0583 12.5749 16.6667C14.7999 14.525 17.2666 11.1417 16.3832 7.21666C15.5499 3.58332 12.4249 2.29166 9.9999 2.29166Z" fill="white"/>
                </svg>
                {address}
            </p>
        </div>
    );
};

export default MapDeveloper;
