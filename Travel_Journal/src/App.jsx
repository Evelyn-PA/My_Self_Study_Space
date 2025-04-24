
import Header from "./components/Header";
import Entry from "./components/entry";

export default function App() {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="body">
        <Entry
          img="\Images\Finland - Helsinki.jpg" alt="Helsinki"
          title="Helsinki - Finland"
          name="Helsinki"
          link="https://shorturl.at/B1Baj"
          content="A crisp, stylish travel journal capturing days spent in Helsinki, where Nordic design meets old-world charm.
                    From sauna sessions by the sea to strolls through snowy streets and modern cafés, this journal holds notes, sketches,
                    and moments from Finland’s cool capital."
        />
        <Entry
          img="/Images/Tampere.jpg" alt="Tampere"
          title="Tampere - Finland"
          name="Tampere"
          link="https://shorturl.at/DlAJL"
          content="Industrial roots meet natural beauty. I wandered between red-brick factories turned into art hubs and serene lakeside views. 
                    A laid-back city with a creative edge."
        />
        <Entry
          img="/Images/Finland - Hameenlinna.jpg" alt="Hameenlinna"
          title="Hameenlinna - Finland"
          name="Hameenlinna"
          link="https://shorturl.at/SAISk"
          content="A quiet stop rich in history. The medieval castle stands strong, overlooking peaceful parks and lakes. 
                    Small-town Finland with a strong sense of identity."
        />
        <Entry
          img="/Images/Kuopio.jpg" alt="Kuopio"
          title="Kuopio - Finland"
          name="Kuopio"
          link="https://shorturl.at/1Qv8x"
          content="Sauna capital and lake views for days. I hiked up Puijo Tower, cruised the waters, and soaked 
                    in that calm Finnish pace. Warm people, even warmer steam."
        />
        <Entry
          img="/Images/Stockholm.jpg" alt="Stockholm"
          title="Stockholm - Sweden"
          name="Stockholm"
          link="https://shorturl.at/nFsht"
          content="Stylish, historic, and full of energy. From the cobblestones of Gamla Stan to sleek modern districts, 
                    every turn had something worth seeing (and photographing)."
        />
        <Entry
          img="/Images/Talin.jpg" alt="Talin"
          title="Tallinn - Estonia"
          name="Tallinn"
          link="https://tinyurl.com/3ufex9sk"
          content="A fairytale vibe with a modern twist. The Old Town is all towers and stone walls, 
                  but just beyond are hip cafes and Baltic buzz. Old meets new, perfectly."
        />
      </div>
    </>
  );
}