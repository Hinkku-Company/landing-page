export const sendEmail = async (email: string) => {
    const api = 'https://phrybxxtukkienrzwvfg.supabase.co/rest/v1/rpc/send_mail';
    const key = import.meta.env.PUBLIC_API_KEY;

    const config: RequestInit = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${key}`,
            'apikey': `${key}`
        },
        body: JSON.stringify({
            mail: email
        })
    }

    try {
        const responseEmail = await fetch(api, config);
        const response = await responseEmail.json();

        if (!responseEmail.ok) {
            console.log(response);
            let message = ""

            if (response?.details?.includes('already exists')) {
                message = "Este correo ya se encuentra registrado."
            }

            throw new Error(message);
        }

        return {
            opts: 'Email enviado',
            isOk: true
        };

    } catch (errorMsg: string | any) {

        return {
            opts: errorMsg,
            isOk: false
        };
    }
}