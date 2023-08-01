
import { basePath, goToTermsAndPrivacy } from '@/utils/contantes';
import { AphroditeIcon, InstagramIcon, TikTokIcon, TwitterIcon } from '@components/React/atoms/Icons';
export const Footer = () => {
    return (
        <footer className="grid place-items-center py-[3.75rem] bg-[--color-bg-black]">
            <div className="grid place-items-center gap-9">
                <AphroditeIcon SvgClassName='icon-menu-container' />

                <div className='flex gap-3'>
                    <InstagramIcon />
                    <TikTokIcon />
                    <TwitterIcon />
                </div>

                <div className='grid place-items-center gap-3'>
                    <p className="text-[14px]">
                        Copyright &copy; Colombia 2022 All rights reserved
                    </p>

                    <div className='flex gap-2'>
                        <a href={`${basePath}${goToTermsAndPrivacy}`} className='link text-[13px]'>
                            Términos y Condiciones
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
