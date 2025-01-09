import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import "./Flashcard.css"
import Navbar from './Navbar';

const flashcardsData = {
        'phonics-letter-sounds': [
          { 
            term: 'A', 
            pronunciation: '"ay"', 
            image: 'https://example.com/images/a.jpg',
            audio: 'https://example.com/audio/a.mp3'
          },
          { 
            term: 'B', 
            pronunciation: '"bee"', 
            image: 'https://example.com/images/b.jpg', 
            audio: 'https://example.com/audio/b.mp3'
          },
          { 
            term: 'C', 
            pronunciation: '"see"', 
            image: 'https://example.com/images/c.jpg', 
            audio: 'https://example.com/audio/c.mp3'
          },
          { 
            term: 'D', 
            pronunciation: '"dee"', 
            image: 'https://example.com/images/d.jpg', 
            audio: 'https://example.com/audio/d.mp3'
          },
          { 
            term: 'E', 
            pronunciation: '"ee"', 
            image: 'https://example.com/images/e.jpg', 
            audio: 'https://example.com/audio/e.mp3'
          },
          { 
            term: 'F', 
            pronunciation: '"ef"', 
            image: 'https://example.com/images/f.jpg', 
            audio: 'https://example.com/audio/f.mp3'
          },
          { 
            term: 'G', 
            pronunciation: '"gee"', 
            image: 'https://example.com/images/g.jpg', 
            audio: 'https://example.com/audio/g.mp3'
          },
          { 
            term: 'H', 
            pronunciation: '"aitch"', 
            image: 'https://example.com/images/h.jpg', 
            audio: 'https://example.com/audio/h.mp3'
          },
          { 
            term: 'I', 
            pronunciation: '"eye"', 
            image: 'https://example.com/images/i.jpg', 
            audio: 'https://example.com/audio/i.mp3'
          },
          { 
            term: 'J', 
            pronunciation: '"jay"', 
            image: 'https://example.com/images/j.jpg', 
            audio: 'https://example.com/audio/j.mp3'
          },
          { 
            term: 'K', 
            pronunciation: '"kay"', 
            image: 'https://example.com/images/k.jpg', 
            audio: 'https://example.com/audio/k.mp3'
          },
          { 
            term: 'L', 
            pronunciation: '"el"', 
            image: 'https://example.com/images/l.jpg', 
            audio: 'https://example.com/audio/l.mp3'
          },
          { 
            term: 'M', 
            pronunciation: '"em"', 
            image: 'https://example.com/images/m.jpg', 
            audio: 'https://example.com/audio/m.mp3'
          },
          { 
            term: 'N', 
            pronunciation: '"en"', 
            image: 'https://example.com/images/n.jpg', 
            audio: 'https://example.com/audio/n.mp3'
          },
          { 
            term: 'O', 
            pronunciation: '"oh"', 
            image: 'https://example.com/images/o.jpg', 
            audio: 'https://example.com/audio/o.mp3'
          },
          { 
            term: 'P', 
            pronunciation: '"pee"', 
            image: 'https://example.com/images/p.jpg', 
            audio: 'https://example.com/audio/p.mp3'
          },
          { 
            term: 'Q', 
            pronunciation: '"cue"', 
            image: 'https://example.com/images/q.jpg', 
            audio: 'https://example.com/audio/q.mp3'
          },
          { 
            term: 'R', 
            pronunciation: '"ar"', 
            image: 'https://example.com/images/r.jpg', 
            audio: 'https://example.com/audio/r.mp3'
          },
          { 
            term: 'S', 
            pronunciation: '"es"', 
            image: 'https://example.com/images/s.jpg', 
            audio: 'https://example.com/audio/s.mp3'
          },
          { 
            term: 'T', 
            pronunciation: '"tee"', 
            image: 'https://example.com/images/t.jpg', 
            audio: 'https://example.com/audio/t.mp3'
          },
          { 
            term: 'U', 
            pronunciation: '"you"', 
            image: 'https://example.com/images/u.jpg', 
            audio: 'https://example.com/audio/u.mp3'
          },
          { 
            term: 'V', 
            pronunciation: '"vee"', 
            image: 'https://example.com/images/v.jpg', 
            audio: 'https://example.com/audio/v.mp3'
          },
          { 
            term: 'W', 
            pronunciation: '"double-u"', 
            image: 'https://example.com/images/w.jpg', 
            audio: 'https://example.com/audio/w.mp3'
          },
          { 
            term: 'X', 
            pronunciation: '"eks"', 
            image: 'https://example.com/images/x.jpg', 
            audio: 'https://example.com/audio/x.mp3'
          },
          { 
            term: 'Y', 
            pronunciation: '"wy"', 
            image: 'https://example.com/images/y.jpg', 
            audio: 'https://example.com/audio/y.mp3'
          },
          { 
            term: 'Z', 
            pronunciation: '"zee" or "zed"', 
            image: 'https://example.com/images/z.jpg', 
            audio: 'https://example.com/audio/z.mp3'
          },
        ],      
    'building-vocabulary': [
      { term: 'Eloquent', definition: 'Fluent or persuasive in speaking or writing.' },
      { term: 'Ubiquitous', definition: 'Present, appearing, or found everywhere.' },
      { term: 'Serendipity', definition: 'The occurrence of events by chance in a happy or beneficial way.' },
      { term: 'Ephemeral', definition: 'Lasting for a very short time.' },
      { term: 'Quixotic', definition: 'Extremely idealistic; unrealistic and impractical.' },
      { term: 'Nostalgia', definition: 'A sentimental longing for the past.' },
      { term: 'Cacophony', definition: 'A harsh, discordant mixture of sounds.' },
      { term: 'Belligerent', definition: 'Hostile and aggressive.' },
      { term: 'Melancholy', definition: 'A feeling of sadness or sorrow, often with no obvious cause.' },
      { term: 'Avarice', definition: 'Extreme greed for wealth or material gain.' },
    ],
    'grammar-sentence-structure': [
      { term: 'Subject', definition: 'The part of a sentence that tells who or what the sentence is about.' },
      { term: 'Predicate', definition: 'The part of a sentence that tells what the subject does.' },
      { term: 'Object', definition: 'The part of a sentence that receives the action.' },
      { term: 'Noun', definition: 'A word that represents a person, place, thing, or idea.' },
      { term: 'Verb', definition: 'A word that expresses action or a state of being.' },
      { term: 'Adjective', definition: 'A word that describes a noun or pronoun.' },
      { term: 'Adverb', definition: 'A word that modifies or qualifies a verb, adjective, or other adverb.' },
      { term: 'Preposition', definition: 'A word that shows the relationship between a noun (or pronoun) and another word in the sentence.' },
      { term: 'Conjunction', definition: 'A word that connects clauses, sentences, or words.' },
      { term: 'Interjection', definition: 'A word or phrase used to express strong emotion or surprise.' },
    ],
    'reading-comprehension': [
      { term: 'Main Idea', definition: 'The central point or theme of a passage or text.' },
      { term: 'Supporting Details', definition: 'The facts, examples, or descriptions that explain or prove the main idea.' },
      { term: 'Inference', definition: 'A conclusion reached based on evidence and reasoning rather than explicit statements.' },
      { term: 'Context Clues', definition: 'Words or phrases surrounding an unfamiliar word that help you understand its meaning.' },
      { term: 'Summarizing', definition: 'Restating the main ideas of a text in a concise way.' },
      { term: 'Predicting', definition: 'Making an educated guess about what will happen next in a story or passage.' },
      { term: 'Fact vs. Opinion', definition: 'A fact is something that can be proven true or false; an opinion is a personal belief or judgment.' },
      { term: 'Cause and Effect', definition: 'Understanding the relationship between events or actions and their outcomes.' },
      { term: 'Tone', definition: 'The author’s attitude or feelings toward the subject matter, expressed through their writing style.' },
      { term: 'Theme', definition: 'The underlying message or lesson in a story or passage.' },
    ],
    'creative-academic-writing': [
      { term: 'Thesis Statement', definition: 'A sentence that clearly expresses the main idea or argument of an essay or paper.' },
      { term: 'Introduction', definition: 'The beginning section of a paper or story that introduces the topic or sets the scene.' },
      { term: 'Conclusion', definition: 'The final section of a paper or story that summarizes the main points and provides closure.' },
      { term: 'Body Paragraph', definition: 'A paragraph in an essay that develops one specific point or argument.' },
      { term: 'Transition', definition: 'A word or phrase that helps guide the reader from one idea to the next.' },
      { term: 'Supporting Evidence', definition: 'Facts, quotes, or examples used to back up the main points in writing.' },
      { term: 'Argumentative Writing', definition: 'Writing that presents a clear argument or position on a topic and provides evidence to support it.' },
      { term: 'Narrative Writing', definition: 'Writing that tells a story, often from a personal perspective.' },
      { term: 'Descriptive Writing', definition: 'Writing that uses vivid details to describe a person, place, or event.' },
      { term: 'Expository Writing', definition: 'Writing that explains or informs about a specific topic.' },
    ],
    'advanced-writing-techniques': [
      { term: 'Persuasive Writing', definition: 'Writing aimed at convincing the reader to adopt a certain point of view or take action.' },
      { term: 'Argumentation', definition: 'The process of forming and presenting a logical argument to support a claim.' },
      { term: 'Rhetorical Devices', definition: 'Techniques used to persuade or engage an audience, such as ethos, pathos, and logos.' },
      { term: 'Counterargument', definition: 'An argument made to oppose another argument.' },
      { term: 'Logical Fallacy', definition: 'A flaw in reasoning that weakens an argument.' },
      { term: 'Metaphor', definition: 'A figure of speech that compares two unlike things by saying one is the other.' },
      { term: 'Simile', definition: 'A figure of speech that compares two unlike things using "like" or "as".' },
      { term: 'Allusion', definition: 'A reference to another work of literature, person, or event.' },
      { term: 'Hyperbole', definition: 'Exaggeration for emphasis or effect.' },
      { term: 'Irony', definition: 'A contrast between what is expected and what actually happens.' },
    ],
  };
  const Flashcards = () => {
    const { topicId } = useParams(); // Get the topicId from the URL
    const flashcards = flashcardsData[topicId]; // Get flashcards for the selected topic
  
    // Pagination states
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 3; // Adjust this to the number of cards per page
  
    // Calculate the index of the first and last flashcard to show on the current page
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = flashcards.slice(indexOfFirstCard, indexOfLastCard);
  
    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
    // Calculate total pages
    const totalPages = Math.ceil(flashcards.length / cardsPerPage);
  
    // If no flashcards for the topic
    if (!flashcards) {
      return <div>No flashcards available for this topic.</div>;
    }
  
    return (
      <div>
        <Navbar/>
        <h1>Flashcards for {topicId.replace('-', ' ')}</h1>
        <div className="flashcard-list">
          {currentCards.map((flashcard, index) => (
            <div key={index} className="flashcard">
              <div className="flashcard-inner">
                {/* Front side of the card */}
                <div className="flashcard-front">
                  <h3>{flashcard.term}</h3>
                </div>
  
                {/* Back side of the card */}
                <div className="flashcard-back">
                  <p>{flashcard.pronunciation}</p>
                  <p>{flashcard.definition}</p>
                {/* Conditionally render image if exists */}
                {flashcard.image && <img src={flashcard.image} alt={flashcard.term} />}
                  
                {/* Conditionally render audio if exists */}
                {flashcard.audio && (
                <audio controls>
                <source src={flashcard.audio} type="audio/mp3" />
                Your browser does not support the audio element.
                 </audio>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination */}
        <div className="pagination">
          <button 
            onClick={() => paginate(currentPage - 1)} 
            disabled={currentPage === 1}
          >
            Prev
          </button>
          {[...Array(totalPages).keys()].map((number) => (
            <button 
              key={number + 1} 
              onClick={() => paginate(number + 1)} 
              className={currentPage === number + 1 ? 'active' : ''}
            >
              {number + 1}
            </button>
          ))}
          <button 
            onClick={() => paginate(currentPage + 1)} 
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    );
  };  
  
  export default Flashcards;