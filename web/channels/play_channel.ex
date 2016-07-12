defmodule PhoenixPhaser.PlayChannel do
  use PhoenixPhaser.Web, :channel
  #alias PhoenixPhaser.Game
  require Logger

  def join("games:play", payload, socket) do
    if authorized?(payload) do
      #Logger.debug "#{socket.assigns.user_id} joined the Play channel"
      #case Game.join(2) do
        #{:ok, response} ->
          {:ok, socket}
        #error ->
        #  error
     # end
    else
      {:error, %{reason: "unauthorized"}}
    end
  end

  def terminate(_reason, socket) do
    #Logger.debug "#{socket.assigns.user_id} left the Play channel"
    #Game.leave(2)
    socket
  end

  # It is also common to receive messages from the client and
  # broadcast to everyone in the current topic (lobby).
  def handle_in("shout", payload, socket) do
    broadcast socket, "shout", payload
    {:noreply, socket}
  end

  # broadcast position data to everyone else
  def handle_in("position", payload, socket) do
    # broadcast_from socket, "position", payload
    #Game.set_position(2, payload)
    {:noreply, socket}
  end

  # broadcast position data to everyone else
  def handle_in("collision", payload, socket) do
    # broadcast_from socket, "position", payload
    #Game.collision(2, payload)
    {:noreply, socket}
  end

  # Add authorization logic here as required.
  defp authorized?(_payload) do
    true
  end
end