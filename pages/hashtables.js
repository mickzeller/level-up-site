import Emoji from '../utils/emoji'
import React from 'react'
import Layout from '../components/MyLayout';

export default function Hashtables() {
  return (
    <Layout>
    <div className="about-center">
      <header className="about-header">
        <span>
          <p>Hashing is done in two steps:</p>
    <p>1- An element (object) is converted to an integer by using a <b>hash function</b> which takes a <b>hash key</b>
      and produces the <b>hash</b>. Modular (remainder) division is then performed on the <b>hash</b> and the
      <b>table size</b> to return an <b>index</b>. This <b>index</b> is where the original element will be stored.</p>
    <p>2- Once the element is stored in the HashTable it is found using a given <b>hash key</b>.</p>

    hash = hash_function(hash_key)
    index = hash % array_size   **note: array_sizes should be prime to reduce collisions**

<p>
    Hash: Simple hashing algorithm would be Hans Peter Luhn's 10-digit number hash that reduced the 10-digits
    and placed them in "buckets"

    Let's say we wanted to store records and use three key functions
        1- insert
        2- search
        3- delete
    Exploring various data structures we discover:
        Arrays: worst case would be O(n), if sorted O(log(n))
        Linked list: insert O(1) and search/delete O(n)
        Balanced binary sorted tree: O(log(n)) for all operations
        HashTable: O(1) for all operations

    Things to consider when making a HashTable:
        1- Table size: too big is wasted space, too small increases collisions
        2- How to handle collisions (separate chaining or open hashing)
        3- Threshold for resizing the table. Known as the Load Factor (LF) which is usually set to ~75%
            LF = number_of_entries_in_table / number of buckets(spaces)

          </p>

        </span>
      </header>
      <style jsx>{`
        .about-header {
          background-color: #282c34;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: calc(10px + 2vmin);
          color: white;
          }
         .about-center {
           text-align: center;
          } 
      `}</style>
    </div>
    </Layout>
  );
}