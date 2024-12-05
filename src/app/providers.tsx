import { RecoilRoot } from 'recoil';
import Recoilize from 'recoilize';

interface ProvidersProps {
  children: any
}
function Providers({ children }: ProvidersProps) {
  return (
    <RecoilRoot>
      {process.env.NODE_ENV === 'development' && <Recoilize />}
      {children}
    </RecoilRoot>
  );
} 