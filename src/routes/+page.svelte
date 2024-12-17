<script lang="ts">
	// make a variable to store which thing to show
	let sectionDisplay = $state('intro');
</script>

<main>
	<div class="introduction">
		<div>
			<img src="https://i.imgur.com/KeaFUOV.png" class="introImg" alt="cosyreii's chibi model" />
			<p class="intBottomText">funni placeholder bottom text</p>
		</div>
		<div class="introText" id="introMain">
			{#if sectionDisplay == 'intro'}
				<p class="pink">Hai! I'm Reii.</p>
				<p>
					I'm a diploma student in
					<span class="pink">Design and Media</span> specialising in 2D
					<span class="pink">Animation</span>. I stream on Twitch and am fluent in English and
					Mandarin~
				</p>
				<p>Nice to meet you!</p>
			{:else if sectionDisplay == 'eduExp'}
				<p class="pink">Education & Experience</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sapiente esse ex at ad?
					Facilis at harum rem, animi alias reprehenderit neque, mollitia accusantium placeat
					laudantium explicabo cumque quisquam exercitationem. Voluptas delectus odit fugiat natus
					voluptatibus pariatur ipsam. Quos, quia maxime delectus vero inventore tenetur! Aperiam
					laboriosam quos expedita nihil optio, vel impedit quasi maiores saepe. Expedita eius ullam
					qui. Quos consequatur illum voluptas quidem provident est, dolorem magni obcaecati? Modi
					eveniet ex nesciunt a soluta illo. Corporis iusto laudantium, tempore atque repudiandae ex
					quia, nisi quibusdam consequuntur non doloremque? Reiciendis numquam, velit ducimus
					aliquid itaque recusandae voluptatem quas. Harum, rem. Doloremque modi aliquid sint!
					Nobis, harum libero! Perspiciatis debitis aut laborum explicabo soluta exercitationem
					fugiat ipsa eos cum suscipit? Quisquam eveniet veniam assumenda voluptatibus neque
					mollitia exercitationem, corrupti totam, natus rerum commodi. Impedit id eveniet,
					distinctio harum incidunt obcaecati accusantium, beatae quae ipsa consequatur, quia labore
					ex delectus est.
				</p>
			{:else if sectionDisplay == 'featured'}
				<p class="pink">Featured Work</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam tempora commodi quas
					aliquam inventore voluptate deserunt illo porro! Maxime inventore beatae cum, quaerat
					dolorum nostrum molestiae odit unde recusandae amet. At, ducimus illo aliquam quasi nihil
					ad placeat animi odio veritatis blanditiis voluptates, a consectetur? Necessitatibus,
					corrupti minima magni saepe repellendus ipsa vel hic aliquam! Labore dignissimos atque
					beatae reprehenderit! Dicta dolore ullam, quia velit, minus, deserunt atque voluptatum
					modi nisi dolorum laudantium natus! Natus commodi ipsum aliquam at qui reprehenderit, ipsa
					accusantium. Beatae iure molestias quas soluta et aliquam! Earum molestiae voluptatibus
					delectus rem amet consectetur iusto a, nemo consequatur, alias dolorum architecto dicta
					adipisci libero facere ullam ipsa numquam. Aspernatur, quisquam inventore fuga enim sed
					laboriosam velit assumenda. Eum quidem veniam saepe illum modi, at sit exercitationem sed.
					Explicabo dolores laudantium fugit aperiam itaque fugiat excepturi quasi rem, earum quos
					deserunt nam modi, similique laborum sit. Saepe, id.
				</p>
			{:else if sectionDisplay == 'projects'}
				<p class="pink">Projects</p>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, mollitia itaque beatae, harum
					assumenda asperiores, natus officiis fugiat quaerat amet ipsum aliquid. Totam iure vero
					ipsum, fugit ipsa recusandae dolor! Voluptas eum unde nisi corporis doloribus voluptatibus
					laboriosam maiores asperiores? Nulla velit ducimus repellendus voluptate, sequi saepe.
					Commodi ipsam, dolor aliquid nobis soluta recusandae praesentium saepe, dignissimos,
					expedita dolorem ipsa? Nisi minus recusandae ducimus repellendus perspiciatis? Corporis
					assumenda beatae ipsa tempora maiores et eligendi vero culpa. Molestias fuga, quaerat
					repellat, placeat quis, tempore voluptatem officiis ex nesciunt ducimus cumque earum!
					Doloribus, illum voluptatem cupiditate repudiandae voluptatum accusantium. Hic natus totam
					itaque suscipit accusamus laudantium inventore porro labore assumenda perferendis
					consequuntur vel ipsa reprehenderit error aspernatur ducimus dignissimos expedita, nobis
					cum. Sapiente enim, amet inventore omnis quasi repudiandae, doloribus adipisci placeat
					molestias laborum rem! Perferendis illum saepe quos maiores vitae unde quia? Accusamus
					tenetur aut facilis blanditiis, laboriosam amet explicabo ullam!
				</p>
			{/if}
		</div>
		<div class="scroll">
			<button
				class="mButton"
				onclick={() => {
					sectionDisplay = 'intro';
				}}>Introduction</button
			>
			<button
				class="mButton"
				onclick={() => {
					sectionDisplay = 'eduExp';
				}}>Education & Experience</button
			>
			<button
				class="mButton"
				onclick={() => {
					sectionDisplay = 'featured';
				}}>Featured Work</button
			>
			<button
				class="mButton"
				onclick={() => {
					sectionDisplay = 'projects';
				}}>Projects</button
			>
		</div>
	</div>
</main>
