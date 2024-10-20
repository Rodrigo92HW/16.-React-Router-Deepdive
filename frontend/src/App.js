import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Events, { loader as eventLoader } from './pages/Events';
import EventDetail, { action as deleteEventAction, loader as eventDetailLoader } from './pages/EventDetail';
import NewEvent from './pages/NewEvent';
import EditEvent from './pages/EditEvent';
import Root from './pages/Root';
import EventsRoot from './pages/EventsRoot';
import Error from './pages/Error';
import { action as manipulateEventAcion } from './components/EventForm';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Root />, errorElement: <Error />, children: [
        { index: true, element: <Home /> },
        {
          path: 'events', element: <EventsRoot />, children: [
            { index: true, element: <Events />, loader: eventLoader },
            {
              path: ':eventId', id: 'event-detail', loader: eventDetailLoader, children: [
                { index: true, element: <EventDetail />, action: deleteEventAction },
                { path: 'edit', element: <EditEvent />, action: manipulateEventAcion }
              ]
            },
            { path: 'new', element: <NewEvent />, action: manipulateEventAcion }
          ]
        },

      ]
    }
  ])


  return <RouterProvider router={router} />;
}

export default App;
