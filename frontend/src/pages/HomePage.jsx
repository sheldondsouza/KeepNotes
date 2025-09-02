import React, { useEffect } from 'react'
import { useState } from 'react';
import Navbar from '../components/Navbar'
import RateLimitedUI from '../components/RateLimitedUI';
import axios from "axios";
import toast from 'react-hot-toast';
import NoteCard from '../components/NoteCard';
import api from "../lib/axios";
import NotesNotFound from '../components/noteNotFound';

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
    const fetchNotes = async () => {
        setLoading(true);
        try {
            const res = await api.get('/notes');
           setNotes(res.data);
           setIsRateLimited(false);

        } catch (error) {
            console.error('Error fetching notes:', error);
            if (error.response && error.response.status === 429) {
                setIsRateLimited(true);
            }
            else{
              toast.error("Error fetching notes");
            }
        } finally {
            setLoading(false);
        }
    };

    fetchNotes();
}, []);

  return (
    <div className="min-h-screen">
        <Navbar />
        {isRateLimited && <RateLimitedUI />}
        <div className="max-w-7xl mx-auto p-4 mt-6">
          {loading && <div className="text-center text-primary py-10">Loading...</div>}
          
          {notes.length === 0 && !isRateLimited && <NotesNotFound />}
          
          
          {notes.length>0 && !isRateLimited && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {notes.map(note => (
                <NoteCard key={note._id} note={note} setNotes={setNotes} />
              ))}
            </div>
          )}
        </div>
    </div>
  );
};

export default HomePage;