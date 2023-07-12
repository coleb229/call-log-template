import logo from './logo.svg'
import './App.css'
import { useState } from 'react'

function App() {
  const [callState, setCallState] = useState({
    merchant: '',
    reason: '',
    phone: '',
    resolved: true,
    ticket: true,
    followUp: '',
  })

  return (
    <div className='App pt-10 bg-stone-500 min-h-screen'>
      <form className='grid grid-rows-5 grid-flow-col gap-4 bg-orange-200 pt-4 w-4/6 mx-auto rounded-lg'>
        <div>
          <label htmlFor='merchant' className='pr-4'>
            Merchant -{'>'}
          </label>
          <input
            className='border-2 border-gray-500'
            type='text'
            name='merchant'
            value={callState.merchant}
            onChange={(e) =>
              setCallState({ ...callState, merchant: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor='reason' className='pr-4'>
            Reason -{'>'}
          </label>
          <input
            className='border-2 border-gray-500'
            type='text'
            name='reason'
            value={callState.reason}
            onChange={(e) =>
              setCallState({ ...callState, reason: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor='phone' className='pr-4'>
            Phone -{'>'}
          </label>
          <input
            className='border-2 border-gray-500'
            type='text'
            name='phone'
            value={callState.phone}
            onChange={(e) =>
              setCallState({ ...callState, phone: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor='resolved'>Resolved</label>
          <input
            className='border-2 border-gray-500'
            type='checkbox'
            name='resolved'
            checked={callState.resolved}
            onChange={(e) =>
              setCallState({ ...callState, resolved: e.target.checked })
            }
          />
          <label htmlFor='followUp'>Follow Up</label>
          <input
            className='border-2 border-gray-500'
            type='checkbox'
            name='followUp'
            checked={callState.followUp}
            onChange={(e) =>
              setCallState({ ...callState, followUp: e.target.checked })
            }
          />
        </div>
        <div>
          <label htmlFor='ticket'>Ticket</label>
          <input
            className='border-2 border-gray-500'
            type='checkbox'
            name='ticket'
            checked={callState.ticket}
            onChange={(e) =>
              setCallState({ ...callState, ticket: e.target.checked })
            }
          />
        </div>
      </form>

      <div className='py-10 w-4/6 mx-auto bg-orange-100'>
        <h2>Merchant: {callState.merchant}</h2>
        <h2>Reason: {callState.reason}</h2>
        <h2>Phone: {callState.phone}</h2>
        <h2>Resolved: {callState.resolved ? 'Yes' : 'No'}</h2>
        <h2>Ticket: {callState.ticket ? 'Yes' : 'No'}</h2>
        <h2>Follow Up: {callState.followUp ? 'Yes' : 'No'}</h2>
      </div>
    </div>
  )
}

export default App
