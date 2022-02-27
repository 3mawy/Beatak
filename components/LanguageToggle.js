import React from 'react';
import Link from "next/link";
import {useRouter} from "next/router";

function LanguageToggle(props) {
    const { locale, locales, asPath } = useRouter();
    const router = useRouter()
    return (
        <div>{locales.map((l, i) => {
            return (
                <span key={i} className={l === locale ? 'hidden' : ''}>
                    <button type="button" onClick={ () => router.push(asPath, undefined, { locale: l, shallow: false })}>
      {`${l}`}
    </button>
              </span>
            );
        })}</div>
    );
}

export default LanguageToggle;