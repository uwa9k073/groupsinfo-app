import React from 'react';
import ReactDOM from 'react-dom/client';
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
import './styles/globals.scss';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import Groups from './pages/groups/Groups';

const router = createHashRouter([
    {
        path: "/",
        element: (
          <>
            <Groups />
          </>
        )
      }
])

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)