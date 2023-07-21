
import { AphroditeIcon, InstagramIcon, TikTokIcon, TwitterIcon } from '@/ui/atoms';
export const Footer = () => {
    return (
        <div className="grid place-items-center py-[3.75rem] bg-[--color-bg-black]">
            <div className="grid place-items-center gap-9">
                <AphroditeIcon />

                <div className='flex gap-3'>
                    <InstagramIcon />
                    <TikTokIcon />
                    <TwitterIcon />
                </div>

                <div className='grid place-items-center gap-3'>
                    <p>
                        Copyright &copy; Colombia 2022 All rights reserved
                    </p>

                    <a className='link'>
                        Terms
                    </a>

                    <a className='link'>
                        Privacy
                    </a>
                </div>
            </div>
        </div>
    )
}
