import React from 'react';
import Link from "next/link";
import {useRouter} from "next/router";

function LanguageToggle(props) {
    const { locale, locales, asPath } = useRouter();

    return (
        <div>{locales.map((l, i) => {
            return (
                <span key={i} className={l === locale ? 'hidden' : ''}>
                <Link href={asPath} locale={l}>
                  {`${l}`}
                </Link>
              </span>
            );
        })}</div>
    );
}

export default LanguageToggle;