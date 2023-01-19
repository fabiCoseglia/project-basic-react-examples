import { Error404 } from '../components/Error404'
import { Home } from '../components/Home'
import { ProgressBar } from '../components/ProgressBar'
import { ShowHideMessage } from '../components/ShowHideMessage'
import { ShowHideMessageMiPractica } from '../components/ShowHideMessageMiPractica'


export const routesPublic =  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/showHideMessage",
      element: <ShowHideMessage />,
    },
    {
      path: "/progressBar",
      element: <ProgressBar />,
    },
    {
      path: "/stopwatchTimer",
      element: <StopwatchTimer />,
    },
    {
      path: "/*",
      element: <Error404 />,
    },
    {
      path: "/showHideMessageMiPractica",
      element: <ShowHideMessageMiPractica/>,
    }
    
  ]