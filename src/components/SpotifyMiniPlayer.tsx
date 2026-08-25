import { useState } from 'react';
import { samplePlaylistTracks } from '../data/portfolioData';
import { Play, Pause, SkipForward, SkipBack, Volume2, Database, Shield, Users, Music2, Disc3 } from 'lucide-react';

export default function SpotifyMiniPlayer() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [likedTracks, setLikedTracks] = useState<number[]>([1, 2, 4]);
  const [activeTab, setActiveTab] = useState<'player' | 'schema'>('player');

  const currentTrack = samplePlaylistTracks[currentTrackIndex];

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % samplePlaylistTracks.length);
  };

  const prevTrack = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + samplePlaylistTracks.length) % samplePlaylistTracks.length);
  };

  const toggleLike = (id: number) => {
    if (likedTracks.includes(id)) {
      setLikedTracks(likedTracks.filter(t => t !== id));
    } else {
      setLikedTracks([...likedTracks, id]);
    }
  };

  return (
    <div id="spotify-mini-player-demo" className="mt-6 p-6 sm:p-8 rounded-2xl bg-[#0a0a0a] border border-[#222222] shadow-xl">
      {/* Header with Dev Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-6 border-b border-[#222222]">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex p-1.5 rounded-lg bg-[#141414] text-[#4ADE80] border border-[#222222]">
              <Music2 className="w-4 h-4 text-[#4ADE80]" />
            </span>
            <h4 className="text-base sm:text-lg font-black uppercase font-display text-white">
              Spotify Clone Architecture & Player Preview
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-[#888888] font-mono mt-1">
            MERN Architecture with MongoDB Atlas schemas designed by Swastik
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex items-center p-1 rounded-xl bg-[#121212] border border-[#222222] w-fit">
          <button
            onClick={() => setActiveTab('player')}
            className={`px-3 py-1.5 text-xs font-mono font-bold uppercase rounded-lg transition-all ${
              activeTab === 'player'
                ? 'bg-[#4ADE80] text-black shadow'
                : 'text-[#888888] hover:text-white'
            }`}
          >
            Interactive UI
          </button>
          <button
            onClick={() => setActiveTab('schema')}
            className={`px-3 py-1.5 text-xs font-mono font-bold uppercase rounded-lg transition-all ${
              activeTab === 'schema'
                ? 'bg-[#4ADE80] text-black shadow'
                : 'text-[#888888] hover:text-white'
            }`}
          >
            Mongoose Schema
          </button>
        </div>
      </div>

      {activeTab === 'player' ? (
        <div className="space-y-4">
          {/* Main Player Component */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#121212] border border-[#222222]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Currently Playing Info */}
              <div className="flex items-center gap-3.5 w-full md:w-auto">
                <div className={`w-12 h-12 rounded-xl bg-[#181818] border border-[#2a2a2a] flex items-center justify-center relative ${isPlaying ? 'border-[#4ADE80]' : ''}`}>
                  <Disc3 className={`w-6 h-6 text-[#4ADE80] ${isPlaying ? 'animate-spin' : ''}`} />
                </div>
                <div>
                  <h5 className="text-sm font-bold uppercase font-display text-white flex items-center gap-2">
                    {currentTrack.title}
                    {isPlaying && (
                      <span className="px-2 py-0.5 rounded text-[10px] bg-[#1a1a1a] text-[#4ADE80] font-mono border border-[#4ADE80]/30">
                        PLAYING
                      </span>
                    )}
                  </h5>
                  <p className="text-xs text-[#888888] font-mono">{currentTrack.artist} • <span className="text-[#666666]">{currentTrack.album}</span></p>
                </div>
              </div>

              {/* Controls */}
              <div className="flex flex-col items-center gap-2 w-full md:w-auto">
                <div className="flex items-center gap-4">
                  <button 
                    onClick={prevTrack}
                    className="p-2 rounded-xl text-[#888888] hover:text-white hover:bg-[#181818] transition-all"
                    title="Previous Track"
                  >
                    <SkipBack className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={togglePlay}
                    className="p-3 rounded-full bg-[#4ADE80] text-black hover:bg-white transition-all shadow-lg shadow-[#4ADE80]/20"
                    title={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
                  </button>
                  <button 
                    onClick={nextTrack}
                    className="p-2 rounded-xl text-[#888888] hover:text-white hover:bg-[#181818] transition-all"
                    title="Next Track"
                  >
                    <SkipForward className="w-4 h-4" />
                  </button>
                </div>
                
                {/* Progress bar */}
                <div className="flex items-center gap-2 w-full max-w-xs text-[11px] font-mono text-[#666666]">
                  <span>1:24</span>
                  <div className="h-1 flex-1 bg-[#222222] rounded-full overflow-hidden">
                    <div className={`h-full bg-[#4ADE80] rounded-full ${isPlaying ? 'w-2/5 animate-pulse' : 'w-2/5'}`}></div>
                  </div>
                  <span>{currentTrack.duration}</span>
                </div>
              </div>

              {/* Volume & Details */}
              <div className="hidden lg:flex items-center gap-2 text-[#888888]">
                <Volume2 className="w-4 h-4 text-[#4ADE80]" />
                <div className="w-16 h-1 bg-[#222222] rounded-full overflow-hidden">
                  <div className="w-3/4 h-full bg-[#4ADE80] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Playlist Tracklist */}
          <div className="overflow-x-auto rounded-2xl border border-[#222222] bg-[#121212]">
            <table className="w-full text-left text-xs text-[#CCCCCC]">
              <thead className="bg-[#0a0a0a] text-[11px] uppercase font-mono tracking-wider text-[#888888] border-b border-[#222222]">
                <tr>
                  <th className="py-3 px-4 w-10">#</th>
                  <th className="py-3 px-4">Title & Artist</th>
                  <th className="py-3 px-4 hidden sm:table-cell">Album</th>
                  <th className="py-3 px-4 hidden md:table-cell">Streams</th>
                  <th className="py-3 px-4 text-right">Duration</th>
                  <th className="py-3 px-4 text-right">Fav</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1c1c1c]">
                {samplePlaylistTracks.map((track, idx) => (
                  <tr 
                    key={track.id}
                    onClick={() => { setCurrentTrackIndex(idx); setIsPlaying(true); }}
                    className={`hover:bg-[#181818] cursor-pointer transition-colors ${
                      currentTrackIndex === idx ? 'bg-[#181818] text-[#4ADE80]' : ''
                    }`}
                  >
                    <td className="py-3 px-4 text-[#666666] font-mono">
                      {currentTrackIndex === idx && isPlaying ? (
                        <span className="w-2 h-2 rounded-full bg-[#4ADE80] inline-block animate-ping"></span>
                      ) : (
                        idx + 1
                      )}
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-bold text-white uppercase">{track.title}</div>
                      <div className="text-[#888888] text-[11px] font-mono">{track.artist}</div>
                    </td>
                    <td className="py-3 px-4 text-[#888888] font-mono hidden sm:table-cell">{track.album}</td>
                    <td className="py-3 px-4 text-[#888888] hidden md:table-cell font-mono">{track.plays}</td>
                    <td className="py-3 px-4 text-right text-[#AAAAAA] font-mono">{track.duration}</td>
                    <td className="py-3 px-4 text-right">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleLike(track.id);
                        }}
                        className={`text-sm hover:scale-125 transition-transform ${
                          likedTracks.includes(track.id) ? 'text-[#4ADE80]' : 'text-[#666666] hover:text-[#AAAAAA]'
                        }`}
                        title="Add to Favorites"
                      >
                        {likedTracks.includes(track.id) ? '💚' : '🤍'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* Mongoose Database Schema Architecture View */
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 font-mono text-xs">
            {/* User Schema */}
            <div className="p-4 rounded-xl bg-[#121212] border border-[#222222]">
              <div className="flex items-center gap-1.5 text-[#4ADE80] font-bold uppercase mb-2 font-mono text-[11px]">
                <Database className="w-3.5 h-3.5" />
                <span>User Schema</span>
              </div>
              <pre className="text-[#AAAAAA] text-[11px] leading-relaxed overflow-x-auto font-mono">
{`const UserSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, unique: true },
  passwordHash: { type: String },
  likedPlaylists: [{ 
    type: Schema.Types.ObjectId, 
    ref: 'Playlist' 
  }],
  createdAt: { type: Date, default: Date.now }
});`}
              </pre>
            </div>

            {/* Playlist Schema */}
            <div className="p-4 rounded-xl bg-[#121212] border border-[#222222]">
              <div className="flex items-center gap-1.5 text-[#4ADE80] font-bold uppercase mb-2 font-mono text-[11px]">
                <Database className="w-3.5 h-3.5" />
                <span>Playlist Schema</span>
              </div>
              <pre className="text-[#AAAAAA] text-[11px] leading-relaxed overflow-x-auto font-mono">
{`const PlaylistSchema = new Schema({
  title: { type: String, required: true },
  owner: { 
    type: Schema.Types.ObjectId, 
    ref: 'User' 
  },
  tracks: [{ 
    type: Schema.Types.ObjectId, 
    ref: 'Track' 
  }],
  isPublic: { type: Boolean, default: true }
});`}
              </pre>
            </div>

            {/* Track Schema */}
            <div className="p-4 rounded-xl bg-[#121212] border border-[#222222]">
              <div className="flex items-center gap-1.5 text-[#4ADE80] font-bold uppercase mb-2 font-mono text-[11px]">
                <Database className="w-3.5 h-3.5" />
                <span>Track Schema</span>
              </div>
              <pre className="text-[#AAAAAA] text-[11px] leading-relaxed overflow-x-auto font-mono">
{`const TrackSchema = new Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  duration: { type: String },
  audioUrl: { type: String },
  coverArt: { type: String },
  streamCount: { type: Number, default: 0 }
});`}
              </pre>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#121212] border border-[#222222] text-xs text-[#CCCCCC] flex items-start gap-2.5">
            <Shield className="w-4 h-4 text-[#4ADE80] shrink-0 mt-0.5" />
            <div>
              <strong className="text-white uppercase font-mono font-bold text-[11px] block mb-1">Security & Team Architecture:</strong>
              Configured MongoDB Atlas connection string pooling via protected <code className="bg-[#0a0a0a] px-1.5 py-0.5 rounded border border-[#222222] text-[#4ADE80] font-mono">process.env.MONGODB_URI</code>. Collaborated across an 11-member team delivering discrete modules to GitHub dev branches.
            </div>
          </div>
        </div>
      )}

      {/* Engineering Badges footer */}
      <div className="mt-5 pt-3 border-t border-[#222222] flex flex-wrap items-center justify-between text-xs font-mono text-[#888888] gap-2">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1 text-[#4ADE80] font-bold">
            <Users className="w-3.5 h-3.5" /> 11-Member Dev Team
          </span>
          <span>•</span>
          <span className="text-[#AAAAAA]">MongoDB Atlas Cloud</span>
          <span>•</span>
          <span className="text-[#AAAAAA]">Express Router REST</span>
        </div>
        <span className="text-[#666666] font-mono text-[11px]">Git branch: feature/database-models</span>
      </div>
    </div>
  );
}
