
import searchIcon from '../assets/icons/icon-arrow.svg';
import lodaerIcon from '../assets/icons/icons8-dots-loading.gif'


import { useState, useEffect } from 'react';
import Map from './Map';
import ApiHelper from '../assets/api';

const IpTracker = () => {
    const [ipData, setIpData] = useState(null);
    const [lastValidIpData, setLastValidIpData] = useState(null);
    const [searchIp, setSearchIp] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    const fetchIpInfo = async (ip = '') => {
        try {
            setLoading(true);
            const data = await ApiHelper.getIpInfo(ip);

            if (data.error) {
                setError(true);
                setIpData(lastValidIpData);
                return;
            } else {
                setIpData(data);
                setLastValidIpData(data);
                setError(false);
            }
        } catch (error) {
            throw Error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchIpInfo();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchIpInfo(searchIp);
    };

    const displayData = ipData || lastValidIpData;

    return (
        <div className="min-h-screen font-Rubik flex flex-col justify-between">
            <div className="bg-[url(/images/pattern-bg-mobile.png)] md:bg-[url(/images/pattern-bg-desktop.png)] h-[280px] py-8 bg-no-repeat bg-cover">
                <h1 className="text-white text-center text-2xl mb-6">IP Address Tracker</h1>

                <form onSubmit={handleSubmit} className="max-w-xl mx-auto px-4">
                    <div className="flex">
                        <input
                            type="text"
                            value={searchIp}
                            onChange={(e) => setSearchIp(e.target.value)}
                            placeholder="Search for any IP address"
                            className="flex-1 p-3 rounded-l-lg"
                        />
                        <button
                            className="bg-black text-white px-6 rounded-r-lg hover:bg-gray-800 transition-colors"
                            disabled={loading}
                        >
                           {loading ? "searching..." : <img src={lodaerIcon} alt="arrow icon " className="w-3" />}
                          
                        </button>
                    </div>
                </form>
            </div>

            {error && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[10000]">
                    <div className="bg-white p-6 rounded-lg">
                        <h2 className="text-xl mb-4">Invalid IP Address</h2>
                        <button
                            onClick={() => setError(false)}
                            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors w-full"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {displayData && (
                <div className="relative">
                    <div className="absolute z-[500] top-24 md:top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg w-11/12 max-w-5xl">
                        <div className="grid grid-cols-1 md:grid-cols-4 justify-items-center md:justify-items-start text-center md:text-start gap-3 md:gap-8 p-4 md:p-8">
                            <div className=" ">
                                <h2 className="text-darkGray text-sm">IP ADDRESS</h2>
                                <p className="font-bold text-lg md:text-xl break-words">{displayData.ip}</p>
                            </div>
                            <div className="">
                                <h2 className="text-darkGray text-sm">LOCATION</h2>
                                <p className="font-bold text-lg md:text-xl">{displayData.city}, {displayData.country_name}</p>
                            </div>
                            <div className="">
                                <h2 className="text-darkGray text-sm">TIMEZONE</h2>
                                <p className="font-bold text-lg md:text-xl">UTC {displayData.timezone}</p>
                            </div>
                            <div>
                                <h2 className="text-darkGray text-sm">ISP</h2>
                                <p className="font-bold text-lg md:text-xl">{displayData.org}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {displayData && (
                    <Map position={[displayData.latitude, displayData.longitude]} />
            )}
        </div>
    );
};

export default IpTracker;
