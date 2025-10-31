import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('datasheet')
export class Datasheet {
  @PrimaryGeneratedColumn()
  idDatasheet: number;

  @Column({ nullable: true })
  make: string;

  @Column({ nullable: true })
  model: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  barrels08: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  barrelsa08: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  charge120: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  charge240: number;

  @Column({ nullable: true })
  city08: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  city08u: number;

  @Column({ nullable: true })
  citya08: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  citya08u: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  citycd: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  citye: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  cityuf: number;

  @Column({ nullable: true })
  co2: number;

  @Column({ nullable: true })
  co2a: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  co2tailpipeagpm: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  co2tailpipegpm: number;

  @Column({ nullable: true })
  comb08: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  comb08u: number;

  @Column({ nullable: true })
  comba08: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  comba08u: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  combe: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  combinedcd: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  combineduf: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  cylinders: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  displ: number;

  @Column({ nullable: true })
  drive: string;

  @Column({ nullable: true })
  engid: string;

  @Column({ nullable: true })
  eng_dscr: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  fescore: number;

  @Column({ nullable: true })
  fuelcost08: number;

  @Column({ nullable: true })
  fuelcosta08: number;

  @Column({ nullable: true })
  fueltype: string;

  @Column({ nullable: true })
  fueltype1: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  ghgscore: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  ghgscorea: number;

  @Column({ nullable: true })
  highway08: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  highway08u: number;

  @Column({ nullable: true })
  highwaya08: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  highwaya08u: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  highwaycd: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  highwaye: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  highwayuf: number;

  @Column({ nullable: true })
  hlv: number;

  @Column({ nullable: true })
  hpv: number;

  @Column({ nullable: true })
  id: string;

  @Column({ nullable: true })
  lv2: number;

  @Column({ nullable: true })
  lv4: number;

  @Column({ nullable: true })
  mpgdata: string;

  @Column({ nullable: true })
  phevblended: string;

  @Column({ nullable: true })
  pv2: number;

  @Column({ nullable: true })
  pv4: number;

  @Column({ nullable: true })
  range: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  rangecity: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  rangecitya: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  rangehwy: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  rangehwya: number;

  @Column({ nullable: true })
  trany: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  ucity: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  ucitya: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  uhighway: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  uhighwaya: number;

  @Column({ nullable: true })
  vclass: string;

  @Column({ nullable: true })
  year: string;

  @Column({ nullable: true })
  yousavespend: number;

  @Column({ nullable: true })
  guzzler: string;

  @Column({ nullable: true })
  trans_dscr: string;

  @Column({ nullable: true })
  tcharger: string;

  @Column({ nullable: true })
  scharger: string;

  @Column({ nullable: true })
  atvtype: string;

  @Column({ nullable: true })
  fueltype2: string;

  @Column({ nullable: true })
  rangea: string;

  @Column({ nullable: true })
  evmotor: string;

  @Column({ nullable: true })
  mfrcode: string;

  @Column({ nullable: true })
  c240dscr: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  charge240b: number;

  @Column({ nullable: true })
  c240bdscr: string;

  @Column({ nullable: true })
  createdon: string;

  @Column({ nullable: true })
  modifiedon: string;

  @Column({ nullable: true })
  startstop: string;

  @Column({ nullable: true })
  phevcity: number;

  @Column({ nullable: true })
  phevhwy: number;

  @Column({ nullable: true })
  phevcomb: number;

  @Column({ nullable: true })
  basemodel: string;
}
