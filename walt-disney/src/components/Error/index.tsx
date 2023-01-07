import Link from 'next/link'
import React from 'react'
import * as S from "./style";


export default function Error() {
  return (
    <S.BoxError>
        <S.ImageError src='https://foto.loja2.com.br/img/c65039ae0ee5b324db88b30e300b36bb.gif'/>
        <Link style={{textDecoration: "none"}} href="/"><S.TextError>Sorry! Something went wrong<br/>Return home. Click on the card</S.TextError></Link>
    </S.BoxError>
  )
}
