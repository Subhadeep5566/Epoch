/**
 * EPOCH Ambient Museum Soundscape
 * Pure Web Audio API Synthesizer — Zero external audio files required.
 * Generates a warm, meditative museum archive drone and subtle archival projector atmosphere.
 */

class AudioAtmosphere {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private masterGain: GainNode | null = null;
  private droneOsc1: OscillatorNode | null = null;
  private droneOsc2: OscillatorNode | null = null;
  private noiseNode: AudioBufferSourceNode | null = null;

  public init() {
    if (this.ctx) return;
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      this.ctx = new AudioContextClass();
    } catch (e) {
      console.warn('Web Audio API not supported', e);
    }
  }

  public play() {
    if (this.isPlaying) return;
    this.init();
    if (!this.ctx) return;

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    const now = this.ctx.currentTime;

    // Master Gain
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.0001, now);
    this.masterGain.gain.exponentialRampToValueAtTime(0.2, now + 3); // Smooth 3-second fade in
    this.masterGain.connect(this.ctx.destination);

    // Warm Low-pass filter for historical depth
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(280, now);
    filter.Q.setValueAtTime(1.5, now);
    filter.connect(this.masterGain);

    // Drone 1: 55Hz (A1 note - foundational grounding tone)
    this.droneOsc1 = this.ctx.createOscillator();
    this.droneOsc1.type = 'sine';
    this.droneOsc1.frequency.setValueAtTime(55, now);

    // Drone 2: 110Hz harmonic with subtle 0.15Hz vibrato (museum breathing effect)
    this.droneOsc2 = this.ctx.createOscillator();
    this.droneOsc2.type = 'triangle';
    this.droneOsc2.frequency.setValueAtTime(110.2, now);

    const lfo = this.ctx.createOscillator();
    lfo.frequency.setValueAtTime(0.12, now);
    const lfoGain = this.ctx.createGain();
    lfoGain.gain.setValueAtTime(1.8, now);
    lfo.connect(lfoGain);
    lfoGain.connect(this.droneOsc2.frequency);
    lfo.start();

    // Gain for drones
    const droneGain = this.ctx.createGain();
    droneGain.gain.setValueAtTime(0.15, now);
    this.droneOsc1.connect(filter);
    this.droneOsc2.connect(filter);

    this.droneOsc1.start();
    this.droneOsc2.start();

    // Archival Flutter / Noise texture (simulating 35mm film projector / parchment air)
    try {
      const bufferSize = this.ctx.sampleRate * 2;
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = (Math.random() * 2 - 1) * 0.015;
      }

      this.noiseNode = this.ctx.createBufferSource();
      this.noiseNode.buffer = noiseBuffer;
      this.noiseNode.loop = true;

      const noiseFilter = this.ctx.createBiquadFilter();
      noiseFilter.type = 'bandpass';
      noiseFilter.frequency.setValueAtTime(1200, now);
      noiseFilter.Q.setValueAtTime(0.8, now);

      this.noiseNode.connect(noiseFilter);
      noiseFilter.connect(this.masterGain);
      this.noiseNode.start();
    } catch (e) {
      // Noise buffer fallback
    }

    this.isPlaying = true;
  }

  public stop() {
    if (!this.isPlaying || !this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;
    this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
    this.masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.5);

    setTimeout(() => {
      try {
        this.droneOsc1?.stop();
        this.droneOsc2?.stop();
        this.noiseNode?.stop();
        this.droneOsc1?.disconnect();
        this.droneOsc2?.disconnect();
        this.noiseNode?.disconnect();
      } catch (e) {}
      this.isPlaying = false;
    }, 1600);
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  public getActive(): boolean {
    return this.isPlaying;
  }
}

export const audioAtmosphere = new AudioAtmosphere();
