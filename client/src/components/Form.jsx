import { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoMdCopy } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { LuClipboardEdit } from "react-icons/lu";
import { v4 as uuidv4 } from 'uuid';
import { toast } from "react-hot-toast";


export default function Form() {

    const [isVisible, setIsVisible] = useState(false);
    const [passwordArray, setPasswordArray] = useState([]);
    const [formData, setFormData] = useState({
        site: "",
        username: "",
        password: "",
        errorMessage: "",
    });

    useEffect(() => {
        let passwords = localStorage.getItem('passwords');
        if (passwords) {
            setPasswordArray(JSON.parse(passwords));
        }
    }, [])

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    // save the password in localStorage
    const handleSubmit = (e) => {

        e.preventDefault()

        if (formData.name === '') {
            setFormData({ ...formData, errorMessage: 'Please enter your name.' });
            return;
        }

        setPasswordArray([...passwordArray, { ...formData, id: uuidv4() }]);
        localStorage.setItem('passwords', JSON.stringify([...passwordArray, { ...formData, id: uuidv4() }]))
        
        setFormData({
            site: "",
            username: "",
            password: ""
        })
    }

    // delete information
    const deleteInfo = (id) => {
        let confirmation = confirm("Are you sure you want to delete this information?")
        if (confirmation) {
            setPasswordArray(passwordArray.filter(item => item.id !== id));
            localStorage.setItem('passwords', JSON.stringify(passwordArray.filter(item => item.id !== id)))
            return;
        }
    }

    const editInfo = (id) => { 
        setFormData(passwordArray.filter(item => item.id === id)[0]);
        setPasswordArray(passwordArray.filter(item => item.id !== id));
    }

    // copy text
    const copyText = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => toast.success(`Copied: ${text}`))
            .catch((err) => toast.error("Failed to copy text:", err));
    };

    return (
        <>

            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
            </div>

            <div className="mx-auto py-5 md:myContainer text-center px-40 min-h-screen">
                <h1 className="mt-5"><span className="text-yellow-500 font-bold text-xl">get</span><span className="text-green-800 font-bold text-xl">Password</span></h1>
                <p className="text-xl my-2">Store your password safely, no need to memorize.</p>

                <form onSubmit={handleSubmit} className="text-black flex flex-col p-4 gap-5">
                    <input onChange={handleChange} value={formData.site} className="rounded-lg border border-yellow-500 w-full text-black p-4 py-1 focus:outline-none focus:border-green-500" type="text" name="site" id="site" placeholder="Enter Website Name." required />

                    <div className="flex w-full gap-5">
                        <input onChange={handleChange} value={formData.username} className="rounded-lg border border-yellow-500 w-full text-black p-4 py-1 focus:outline-none focus:border-green-500" type="text" name="username" id="username" placeholder="Enter User Name / Email." required />
                        <div className="relative">
                            <input onChange={handleChange} value={formData.password} className="rounded-lg border border-yellow-500 w-full text-black p-4 py-1 focus:outline-none focus:border-green-500" type={isVisible ? 'text' : 'password'} name="password" id="password" placeholder="Enter Password." required />
                            <span onClick={() => setIsVisible(!isVisible)} className="absolute right-0 top-2 px-2 cursor-pointer">{
                                isVisible ? <FaEye /> : <FaEyeSlash />
                            }</span>
                        </div>
                    </div>

                    <button className="bg-green-700 text-white py-2 px-4 rounded-md focus:outline-none hover:bg-green-600 font-bold tracking-widest">
                        ADD INFO
                    </button>
                </form>

                {/* Table to show passwords */}
                <div className="passwords">
                    <h2 className="text-start text-2xl font-bold mt-10 mb-3">Here You Can See Your Passwords:</h2>
                </div>
                {passwordArray.length === 0 && <div> No Password To show</div>}
                {
                    passwordArray.length !== 0 && <table className="table-auto w-full rounded-md overflow-hidden">
                        <thead className="bg-green-800 text-white">
                            <tr>
                                <th className="py-2">Site</th>
                                <th className="py-2">Username/Email</th>
                                <th className="py-2">Password</th>
                                <th className="py-2">Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-green-200">
                            {
                                passwordArray && passwordArray.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className="py-2 border border-white text-center">
                                                <div className="flex justify-center items-center">
                                                    {item.site} &nbsp; <IoMdCopy className="cursor-pointer" size={20} onClick={() => copyText(item.site)} />
                                                </div>
                                            </td>
                                            <td className="py-2 border border-white text-center">
                                                <div className="flex justify-center items-center">
                                                    {item.username} &nbsp; <IoMdCopy className="cursor-pointer" size={20} onClick={() => copyText(item.username)} />
                                                </div>
                                            </td>
                                            <td className="py-2 border border-white text-center">
                                                <div className="flex justify-center items-center">
                                                    {item.password} &nbsp; <IoMdCopy className="cursor-pointer" size={20} onClick={() => copyText(item.password)} />
                                                </div>
                                            </td>
                                            <td className="py-2 border border-white text-center">
                                                <div className="flex justify-evenly items-center">
                                                    <LuClipboardEdit
                                                        className="cursor-pointer" size={20} onClick={() => editInfo(item.id)} />
                                                    <MdDelete onClick={()=> deleteInfo(item.id)} className="cursor-pointer text-red-600" size={20} />
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                }
            </div>
        </>
    );
}