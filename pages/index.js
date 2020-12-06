import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {

	return (
		// <div className={styles.container}>
		<div>
			<Head>
				<title>ZEUS</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<div className={styles.bg} />
				<div className={styles.lightning} id={styles.flashit} />
				<div style={{ height: '50vh', lineHeight: '50vh' }}>
					<h1 className={styles.title}><b>ZEUS</b></h1>
				</div>

				<div style={{ textAlign: 'center', padding: '60px 0', backgroundColor: 'black', color: 'white' }}>
					<h2 style={{ margin: '0', paddingBottom: '10px', fontSize: '35px' }}><b>KING OF THE GODS</b></h2>
					<div style={{ margin: '0 15%', fontSize: '18px' }}>
						<p>In ancient Greek mythology, Zeus was placed as the leader of the gods. He was saved from his father Cronus by his mother Rhea at birth, and when he had grown old enough,
						fought fierce battles against Titans and Giants to take the throne of Mount Olympus. He ruled as a fair, just, and harsh king. Known for reconciling fights between gods,
						ending disputes, and at the same time dealing extreme punishments to those that did wrong. His stories are told in a number of works, including the Iliad and the Odyssey.
						</p>
					</div>
				</div>

				<div className={styles.godof}>
					<div>
						<div style={{ margin: '0 auto', width: '80px' }}>
							<Image src="/cloud.png" alt="sky" height={80} width={80} />
						</div>
						<p style={{ margin: '0', paddingTop: '20px' }}><b>God of: The sky</b></p>
					</div>
					<div>
						<div style={{ margin: '0 auto', width: '80px' }}>
							<Image src="/flash.png" alt="flash" height={80} width={80} />
						</div>
						<p style={{ margin: '0', paddingTop: '20px' }}><b>Weapon: Thunderbolt</b></p>
					</div>
					<div>
						<div style={{ margin: '0 auto', width: '100px' }}>
							<Image src="/eagle.png" alt="eagle" height={80} width={100} />
						</div>
						<p style={{ margin: '0', paddingTop: '20px' }}><b>Animal: Eagle</b></p>
					</div>
				</div>

				<div className={styles.passage} style={{ backgroundColor: '#1a2d3f', textAlign: 'center', color: 'white', padding: '20px 15%', fontSize: '18px' }}>
					<h2 style={{ paddingLeft: '20px', margin: '0 0' }}><b>ZEUS IN THE ILIAD</b></h2>
					<div>
						<p style={{ margin: '0', paddingTop: '20px', color: 'white', marginBottom: '0px' }}>Rage—Goddess, sing the rage of Peleus’ son Achilles,
						murderous, doomed, that cost the Achaeans countless losses,
						hurling down to the House of Death so many sturdy souls,
						great fighter’ souls, but made their body carrion,
						feasts for the dogs and birds,
							and the will of Zeus was moving toward its end.</p>
						<p style={{ marginTop: '5px' }}>- Book 1</p>
					</div>
					<div>
						<p style={{ margin: '0', paddingTop: '20px', color: 'white', marginBottom: '0px' }}>We are the ones who stormed the seven gates of Thebes,
						heading a weaker force and facing stronger walls
							but obeying the gods’ signs and backed by Zeus.</p>
						<p style={{ marginTop: '5px' }}>- Book 4</p>
					</div>
					<div>
						<p style={{ margin: '0', paddingTop: '20px', color: 'white', marginBottom: '0px' }}>Cronus’ son has entangled me in madness, blinding ruin—
							Zeus is a harsh, cruel god.</p>
						<p style={{ marginTop: '5px' }}>- Book 9</p>
					</div>
					<div>
						<p style={{ margin: '0', paddingTop: '20px', color: 'white', marginBottom: '0px' }}>One man is a splendid fighter—a god has made him so—
						one’s a dancer, another skilled at lyre and song,
						and deep in the next man’s chest farseeing Zeus
							plants the gift of judgment, good clear sense.</p>
						<p style={{ marginTop: '5px' }}>- Book 13</p>
					</div>
				</div>

				<div className={styles.family}>
					<div>
						<div className={styles.familyimgdiv}>
							<Image src="/kronos.jpg" alt="sky" height={160} width={120} className={styles.familyimg} />
						</div>
						<p style={{ margin: '0', paddingTop: '20px', textAlign: 'center' }}><b>Father: Kronos</b></p>
					</div>
					<div>
						<div className={styles.familyimgdiv}>
							<Image src="/rhea.jpg" alt="eagle" height={160} width={120} className={styles.familyimg} />
						</div>
						<p style={{ margin: '0', paddingTop: '20px', textAlign: 'center' }}><b>Mother: Rhea</b></p>
					</div>
					<div>
						<div className={styles.familyimgdiv}>
							<Image src="/hera.jpg" alt="flash" height={160} width={120} className={styles.familyimg} />
						</div>
						<p style={{ margin: '0', paddingTop: '20px', textAlign: 'center' }}><b>Spouse: Hera</b></p>
					</div>
				</div>

				<div style={{ padding: '40px 0', backgroundColor: 'black' }}>
					<p style={{ textAlign: 'center', color: 'white' }}>Benoit Ortalo-Magne</p>
				</div>
			</main>
		</div>
	)
}
