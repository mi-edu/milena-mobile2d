import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';


export default function HomeScreen() {
  return (
    <ParallaxScrollView
    headerBackgroundColor={{ light: '#000', dark: '#000' }} // fundo preto
    headerImage={
      <Image
        source={require('@/assets/images/magnus.png')}
        style={styles.reactLogo}
        resizeMode="cover" // faz a imagem cobrir a área toda
      />
    }
  >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Olá, Janaina</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedText type="defaultSemiBold">Conta corrente **** 8454</ThemedText>{' '}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Seu saldo disponivel:</ThemedText>
        <ThemedText>
        <ThemedText type="defaultSemiBold"></ThemedText>{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'R$- 65.547.65'
            })}
          </ThemedText>{' '}
        </ThemedText>
      </ThemedView>

      <div style={{ display: 'flex', gap: '10px' }}>
  <button 
    onClick={() => alert('Você clicou!')}
    style={{ 
      width: '80px', 
      height: '80px', 
      borderRadius: '15px', 
      backgroundColor: 'black', 
      color: 'white', 
      border: '2px solid white'
    }}
  >
    𝗣𝗶𝘅
  </button>

  <button 
    onClick={() => alert('Você clicou!')}
    style={{ 
      width: '80px', 
      height: '80px', 
      borderRadius: '15px', 
      backgroundColor: 'black', 
      color: 'white', 
      border: '2px solid white'
    }}
  >
     𝗘𝘅𝘁𝗿𝗮𝘁𝗼
  </button>

  <button 
    onClick={() => alert('Você clicou!')}
    style={{ 
      width: '80px', 
      height: '80px', 
      borderRadius: '15px', 
      backgroundColor: 'black', 
      color: 'white', 
      border: '2px solid white'
    }}
  >
     𝗖𝗮𝗿𝘁𝗼̃𝗲𝘀
  </button>

  <button 
    onClick={() => alert('Você clicou!')}
    style={{ 
      width: '80px', 
      height: '80px', 
      borderRadius: '15px', 
      backgroundColor: 'black', 
      color: 'white', 
      border: '2px solid white'
    }}
  >
    Recarga
  </button>
</div>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Seu Crédito</ThemedText>
        <ThemedText>R$- 90.546.45</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>

        <ThemedText type="subtitle">𝐕𝐨𝐜𝐞̂ 𝐩𝐨𝐝𝐞</ThemedText>
        <ThemedText>{' '}

        <Collapsible title="𝐄𝐦𝐩𝐫𝐞́𝐬𝐭𝐢𝐦𝐨">
  <ThemedText>
    Janaina, o seu imprestimo pode ser de até R$- 150.000.00, nossos juros são para ajudar 
    o cliente, então é apeas 2% ao mes (aplicano issi na sua situação fica R$- 3.000.00 ao mes)
  </ThemedText>
  <ExternalLink href=" ">
    <ThemedText type="link">Fᥲzᥱr E꧑ρrᥱ́᥉tι꧑᥆</ThemedText>
  </ExternalLink>
</Collapsible>

<Collapsible title="𝐂𝐚𝐢𝐱𝐢𝐧𝐡𝐚">
  <ThemedText>
    Na caixinha você pode guardar seu dinheiro com muita segurança, pode programa-la para liberar 
    seu dinheiro até 1 ano depois que você guardou, você pode alterar as configurações e deixar 
    para que resgate o dinheiro quando quiser. O objetivo da caixinha é vocêguardar o dinheiropara 
    uma viagem por exemplo, e então, o que acha da ideia?
  </ThemedText>
  <ExternalLink href=" ">
    <ThemedText type="link">Ir ρᥲrᥲ ᥴᥲι᥊ιᥒhᥲ</ThemedText>
  </ExternalLink>
</Collapsible>

<Collapsible title="𝐈𝐧𝐯𝐞𝐬𝐭𝐢𝐦𝐞𝐧𝐭𝐨𝐬">
  <ThemedText>
  Investir oferece benefícios como o crescimento do patrimônio, proteção contra a inflação e geração de
   rendimentos passivos. Além disso, permite diversificar fontes de renda e alcançar metas financeiras de 
   longo prazo, como aposentadoria ou compra de bens.
  </ThemedText>
  <ExternalLink href=" ">
    <ThemedText type="link">Iᥒ᥎ᥱ᥉tιr</ThemedText>
  </ExternalLink>
</Collapsible>
 </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
