import React from 'react'
import RecentEntriesCard from './RecentEntriesCard';
import {useSelector} from 'react-redux'

const RecentEntriesContainer = () => {
    const updateUserState = useSelector(state => state.updateUser)
    const updateUser = {...updateUserState}
    let entries = !!updateUser.user ? updateUser.user.entries : []
    let sortedEntries = [...entries]
    sortedEntries = sortedEntries.sort((a, b) => b.id - a.id)


    return (
        <div id="recent-entry-container">
            <h2>Recent Dreams</h2>
            <h5>For each of the recent Dream Entries, click "Description" to read what you wrote about your dream. Click "More Details" to edit your description of the dream or add an interpretation.</h5>
            {sortedEntries.map((entry, index) => 
                index < 5 && <RecentEntriesCard {...entry} key={entry.id}/>
            )}
        </div>
    )
}

export default RecentEntriesContainer
