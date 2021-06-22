import * as S from './styles'
import Image from 'next/image';

type MainProps = {
  title?: string;
  description?: string;
}

const Main = ({title, description}: MainProps) => (
  <S.Wrapper>
    <Image src="/img/dedos_cruzados.png" width={300} height={300}/>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>  
  </S.Wrapper>
)

export default Main
