import React from "react";
import FooterLink from "./footer_link/footer_link";

export default function FooterSection() {
    return (
        <div className="Footer py-12 bg-white flex-col items-center gap-12 flex ipad:pt-16">
            <div className="Container self-stretch w-full px-4 flex-col justify-start items-start gap-12 flex">
                <div className="Content self-stretch gap-8 grid grid-cols-2 ipad:grid-cols-6">
                    <div className="FooterLinksColumn grow shrink basis-0 flex-col justify-start items-start gap-4 flex flex-wrap">
                        <div className="Heading self-stretch text-gray-400 text-[14px] font-semibold leading-tight">Product</div>
                            <div className="FooterLinks self-stretch flex-col justify-start items-start gap-3 flex">
                                <FooterLink linkName="Overview" />
                                <FooterLink linkName="Features" />
                                <div className="FooterLink justify-start items-center gap-2 inline-flex">
                                    <div className="Button justify-start items-start flex">
                                    <div className="ButtonBase justify-center items-center gap-2 flex">
                                        <div className="Text text-gray-500 text-[16px] font-semibold leading-normal">Solutions</div>
                                    </div>
                                    </div>
                                    <div className="Badge justify-start items-start flex">
                                    <div className="BadgeBase px-2 py-0.5 bg-emerald-50 rounded-2xl justify-center items-center flex">
                                        <div className="Text text-center text-emerald-700 text-[12px] font-medium leading-none">New</div>
                                    </div>
                                    </div>
                                </div>
                                <FooterLink linkName="Tutorials" />
                                <FooterLink linkName="Pricing" />
                                <FooterLink linkName="Releases" />
                            </div>
                        </div>
                        < div className="FooterLinksColumn grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                            <div className="Heading self-stretch text-gray-400 text-[14px] font-semibold leading-tight">Company</div>
                                <div className="FooterLinks self-stretch flex-col justify-start items-start gap-3 flex">
                                    <FooterLink linkName="About us" />
                                    <FooterLink linkName="Careers" />
                                    <FooterLink linkName="Press" />
                                    <FooterLink linkName="News" />
                                    <FooterLink linkName="Media kit" />
                                    <FooterLink linkName="Contact" />
                                </div>
                        </div>
                        < div className="FooterLinksColumn grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                            <div className="Heading self-stretch text-gray-400 text-[14px] font-semibold leading-tight">Resources</div>
                                <div className="FooterLinks self-stretch flex-col justify-start items-start gap-3 flex">
                                <FooterLink linkName="Blog" />
                                <FooterLink linkName="Newsletter" />
                                <FooterLink linkName="Events" />
                                <FooterLink linkName="Help centre" />
                                <FooterLink linkName="Tutorials" />
                                <FooterLink linkName="Support" />
                                </div>
                        </div>
                        <div className="FooterLinksColumn grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                            <div className="Heading self-stretch text-gray-400 text-[14px] font-semibold leading-tight">Use cases</div>
                                <div className="FooterLinks self-stretch h-[204px] flex-col justify-start items-start gap-3 flex">
                                <FooterLink linkName="Startups" />
                                <FooterLink linkName="Enterprise" />
                                <FooterLink linkName="Government" />
                                <FooterLink linkName="SaaS" />
                                <FooterLink linkName="Marketplaces" />
                                <FooterLink linkName="Ecommerce" />
                                </div>
                        </div>
                        <div className="FooterLinksColumn grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                            <div className="Heading self-stretch text-gray-400 text-[14px] font-semibold leading-tight">Social</div>
                                <div className="FooterLinks self-stretch flex-col justify-start items-start gap-3 flex">
                                <FooterLink linkName="Twitter" />
                                <FooterLink linkName="LinkedIn" />
                                <FooterLink linkName="Facebook" />
                                <FooterLink linkName="GitHub" />
                                <FooterLink linkName="AngelList" />
                                <FooterLink linkName="Dribbble" />
                                </div>
                        </div>
                        <div className="FooterLinksColumn grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                            <div className="Heading self-stretch text-gray-400 text-[14px] font-semibold leading-tight">Legal</div>
                                <div className="FooterLinks self-stretch flex-col justify-start items-start gap-3 flex">
                                <FooterLink linkName="Terms" />
                                <FooterLink linkName="Privacy" />
                                <FooterLink linkName="Cookies" />
                                <FooterLink linkName="Licenses" />
                                <FooterLink linkName="Setting" />
                                <FooterLink linkName="Contact" />
                                </div>
                        </div>
                    </div>
                <div className="Container self-stretch h-[113px] px-4 flex-col justify-start items-start gap-8 flex">
                    <div className="Divider self-stretch h-[1px] bg-gray-200" />
                    <div className="Content self-stretch h-20 flex-col justify-start items-start gap-6 flex">
                    <div className="Logo justify-start items-start inline-flex">
                        <div className="LogoWrap w-[142px] h-8 justify-center items-start gap-2.5 flex">
                        <div className="Logomark shadow justify-start items-start inline-flex">
                            <div className="Content w-8 h-8 relative bg-gradient-to-b from-white to-gray-300 rounded-lg border border border border border-gray-300">
                            <div className="Grid w-8 h-8 left-0 top-0 absolute" />
                            <div className="Dot w-4 h-4 left-[8px] top-[8px] absolute bg-gradient-to-tr from-violet-900 to-violet-700 rounded-full shadow" />
                            <div className="Blur w-8 h-4 left-0 top-[16px] absolute bg-white bg-opacity-20 rounded-bl-lg rounded-br-lg backdrop-blur-[5px]" />
                            </div>
                        </div>
                        <div className="Logotype w-[100px] h-8 relative flex-col justify-start items-start flex" ><svg width="101" height="32" viewBox="0 0 101 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.0038 8.4541H12.6387V17.9569C12.6387 18.9986 12.3925 19.9148 11.9001 20.7055C11.4124 21.4962 10.7258 22.1141 9.8404 22.5592C8.95498 22.9996 7.92042 23.2197 6.73671 23.2197C5.54826 23.2197 4.51133 22.9996 3.62591 22.5592C2.74049 22.1141 2.05394 21.4962 1.56625 20.7055C1.07856 19.9148 0.834717 18.9986 0.834717 17.9569V8.4541H3.46966V17.7368C3.46966 18.3428 3.60224 18.8826 3.86739 19.3561C4.13727 19.8296 4.51606 20.2013 5.00375 20.4711C5.49144 20.7363 6.06909 20.8689 6.73671 20.8689C7.40432 20.8689 7.98197 20.7363 8.46966 20.4711C8.96208 20.2013 9.34087 19.8296 9.60602 19.3561C9.87118 18.8826 10.0038 18.3428 10.0038 17.7368V8.4541Z" fill="#101828"/>
                            <path d="M17.9601 16.6075V22.9996H15.389V12.0905H17.8464V13.9442H17.9743C18.2252 13.3334 18.6253 12.848 19.1746 12.4882C19.7285 12.1283 20.4127 11.9484 21.2271 11.9484C21.98 11.9484 22.6357 12.1094 23.1944 12.4314C23.7579 12.7533 24.1935 13.2197 24.5013 13.8305C24.8138 14.4413 24.9676 15.1823 24.9629 16.0535V22.9996H22.3919V16.4513C22.3919 15.7221 22.2025 15.1515 21.8237 14.7396C21.4497 14.3277 20.9312 14.1217 20.2683 14.1217C19.8185 14.1217 19.4184 14.2211 19.068 14.42C18.7224 14.6141 18.4501 14.8959 18.2513 15.2652C18.0571 15.6345 17.9601 16.0819 17.9601 16.6075Z" fill="#101828"/>
                            <path d="M33.024 12.0905V14.0791H26.7527V12.0905H33.024ZM28.301 9.47683H30.872V19.7183C30.872 20.064 30.9241 20.3291 31.0283 20.5138C31.1372 20.6937 31.2792 20.8168 31.4544 20.8831C31.6296 20.9494 31.8237 20.9825 32.0368 20.9825C32.1978 20.9825 32.3445 20.9707 32.4771 20.947C32.6144 20.9233 32.7186 20.902 32.7896 20.8831L33.2229 22.893C33.0855 22.9404 32.889 22.9925 32.6334 23.0493C32.3824 23.1061 32.0747 23.1392 31.7101 23.1487C31.0661 23.1676 30.4861 23.0706 29.97 22.8575C29.4539 22.6397 29.0444 22.3035 28.7413 21.849C28.443 21.3944 28.2962 20.8263 28.301 20.1444V9.47683Z" fill="#101828"/>
                            <path d="M35.1742 22.9996V12.0905H37.7452V22.9996H35.1742ZM36.4668 10.5422C36.0596 10.5422 35.7092 10.4072 35.4157 10.1373C35.1221 9.86272 34.9753 9.53365 34.9753 9.15012C34.9753 8.76187 35.1221 8.43279 35.4157 8.16291C35.7092 7.88829 36.0596 7.75098 36.4668 7.75098C36.8787 7.75098 37.2291 7.88829 37.518 8.16291C37.8115 8.43279 37.9583 8.76187 37.9583 9.15012C37.9583 9.53365 37.8115 9.86272 37.518 10.1373C37.2291 10.4072 36.8787 10.5422 36.4668 10.5422Z" fill="#101828"/>
                            <path d="M45.8365 12.0905V14.0791H39.5652V12.0905H45.8365ZM41.1135 9.47683H43.6845V19.7183C43.6845 20.064 43.7366 20.3291 43.8408 20.5138C43.9497 20.6937 44.0917 20.8168 44.2669 20.8831C44.4421 20.9494 44.6362 20.9825 44.8493 20.9825C45.0103 20.9825 45.157 20.9707 45.2896 20.947C45.4269 20.9233 45.5311 20.902 45.6021 20.8831L46.0354 22.893C45.898 22.9404 45.7015 22.9925 45.4459 23.0493C45.1949 23.1061 44.8872 23.1392 44.5226 23.1487C43.8786 23.1676 43.2986 23.0706 42.7825 22.8575C42.2664 22.6397 41.8569 22.3035 41.5538 21.849C41.2555 21.3944 41.1087 20.8263 41.1135 20.1444V9.47683Z" fill="#101828"/>
                            <path d="M50.7921 8.4541V22.9996H48.2211V8.4541H50.7921Z" fill="#101828"/>
                            <path d="M58.2655 23.2126C57.1717 23.2126 56.2271 22.9854 55.4317 22.5308C54.6409 22.0715 54.0325 21.4229 53.6064 20.5848C53.1802 19.742 52.9672 18.75 52.9672 17.6089C52.9672 16.4868 53.1802 15.5019 53.6064 14.6544C54.0373 13.8021 54.6386 13.1392 55.4104 12.6657C56.1821 12.1875 57.0889 11.9484 58.1305 11.9484C58.8029 11.9484 59.4373 12.0573 60.0339 12.2751C60.6353 12.4882 61.1656 12.8196 61.6248 13.2694C62.0889 13.7193 62.4534 14.2922 62.7186 14.9882C62.9837 15.6795 63.1163 16.5033 63.1163 17.4598V18.2481H54.1746V16.5152H60.6518C60.6471 16.0228 60.5406 15.5848 60.3322 15.2013C60.1239 14.813 59.8327 14.5076 59.4587 14.2851C59.0893 14.0625 58.6585 13.9513 58.166 13.9513C57.6405 13.9513 57.1788 14.0791 56.7811 14.3348C56.3834 14.5857 56.0732 14.9172 55.8507 15.3291C55.6329 15.7363 55.5216 16.1837 55.5169 16.6714V18.1842C55.5169 18.8187 55.6329 19.3632 55.8649 19.8177C56.0969 20.2675 56.4212 20.6132 56.8379 20.8547C57.2546 21.0914 57.7423 21.2098 58.301 21.2098C58.675 21.2098 59.0136 21.1577 59.3166 21.0535C59.6196 20.9446 59.8824 20.786 60.105 20.5777C60.3275 20.3693 60.4956 20.1113 60.6092 19.8035L63.0098 20.0734C62.8583 20.7079 62.5695 21.2619 62.1433 21.7354C61.7219 22.2041 61.1821 22.5687 60.524 22.8291C59.8658 23.0848 59.113 23.2126 58.2655 23.2126Z" fill="#101828"/>
                            <path d="M69.3397 23.1913C68.4827 23.1913 67.7156 22.9711 67.0386 22.5308C66.3615 22.0905 65.8264 21.4513 65.4334 20.6132C65.0404 19.7751 64.8439 18.7571 64.8439 17.5592C64.8439 16.3471 65.0428 15.3244 65.4405 14.491C65.843 13.653 66.3851 13.0209 67.067 12.5947C67.7488 12.1639 68.5087 11.9484 69.3468 11.9484C69.986 11.9484 70.5116 12.0573 70.9235 12.2751C71.3354 12.4882 71.6621 12.7462 71.9036 13.0493C72.1451 13.3476 72.3321 13.6293 72.4647 13.8944H72.5712V8.4541H75.1493V22.9996H72.6209V21.2808H72.4647C72.3321 21.546 72.1404 21.8277 71.8894 22.126C71.6385 22.4195 71.307 22.6705 70.8951 22.8788C70.4831 23.0872 69.9647 23.1913 69.3397 23.1913ZM70.057 21.0819C70.6015 21.0819 71.0655 20.9352 71.4491 20.6416C71.8326 20.3433 72.1238 19.929 72.3226 19.3987C72.5215 18.8684 72.6209 18.2505 72.6209 17.545C72.6209 16.8395 72.5215 16.2264 72.3226 15.7055C72.1285 15.1847 71.8397 14.7799 71.4562 14.491C71.0774 14.2022 70.611 14.0578 70.057 14.0578C69.4841 14.0578 69.0059 14.2069 68.6224 14.5052C68.2388 14.8035 67.95 15.2155 67.7559 15.741C67.5618 16.2666 67.4647 16.8679 67.4647 17.545C67.4647 18.2268 67.5618 18.8353 67.7559 19.3703C67.9547 19.9006 68.2459 20.3196 68.6295 20.6274C69.0177 20.9304 69.4936 21.0819 70.057 21.0819Z" fill="#101828"/>
                            <path d="M92.1327 8.4541H94.7676V17.9569C94.7676 18.9986 94.5214 19.9148 94.029 20.7055C93.5413 21.4962 92.8547 22.1141 91.9693 22.5592C91.0839 22.9996 90.0493 23.2197 88.8656 23.2197C87.6772 23.2197 86.6402 22.9996 85.7548 22.5592C84.8694 22.1141 84.1828 21.4962 83.6952 20.7055C83.2075 19.9148 82.9636 18.9986 82.9636 17.9569V8.4541H85.5986V17.7368C85.5986 18.3428 85.7311 18.8826 85.9963 19.3561C86.2662 19.8296 86.645 20.2013 87.1327 20.4711C87.6203 20.7363 88.198 20.8689 88.8656 20.8689C89.5332 20.8689 90.1109 20.7363 90.5986 20.4711C91.091 20.2013 91.4698 19.8296 91.7349 19.3561C92.0001 18.8826 92.1327 18.3428 92.1327 17.7368V8.4541Z" fill="#101828"/>
                            <path d="M100.267 8.4541V22.9996H97.6316V8.4541H100.267Z" fill="#101828"/>
                            </svg>
                        </div>
                        </div>
                    </div>
                    <div className="FooterText self-stretch text-gray-400 text-[16px] font-normal leading-normal">© 2077 Untitled UI. All rights reserved.</div>
                    </div>
                </div>
        </div>
    </div>
    )
}